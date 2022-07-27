import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApexOptions } from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartGithubIssues: ApexOptions = {};
  chartTaskDistribution: ApexOptions = {};
  chartBudgetDistribution: ApexOptions = {};
  chartWeeklyExpenses: ApexOptions = {};
  chartMonthlyExpenses: ApexOptions = {};
  chartYearlyExpenses: ApexOptions = {};
  data: any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _projectService: DashboardService,
      private _router: Router
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Get the data
      this._projectService.data$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((data) => {

              // Store the data
              this.data = data;

              // Prepare the chart data
              this._prepareChartData();
          });

      // Attach SVG fill fixer to all ApexCharts
      window['Apex'] = {
          chart: {
              events: {
                  mounted: (chart: any, options?: any): void => {
                      this._fixSvgFill(chart.el);
                  },
                  updated: (chart: any, options?: any): void => {
                      this._fixSvgFill(chart.el);
                  }
              }
          }
      };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Fix the SVG fill references. This fix must be applied to all ApexCharts
   * charts in order to fix 'black color on gradient fills on certain browsers'
   * issue caused by the '<base>' tag.
   *
   * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
   *
   * @param element
   * @private
   */
  private _fixSvgFill(element: Element): void
  {
      // Current URL
      const currentURL = this._router.url;

      // 1. Find all elements with 'fill' attribute within the element
      // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
      // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
      Array.from(element.querySelectorAll('*[fill]'))
           .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
           .forEach((el) => {
               const attrVal = el.getAttribute('fill');
               el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
           });
  }

  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  private _prepareChartData(): void
  {
      // Github issues
      this.chartGithubIssues = {
          chart      : {
              fontFamily: 'inherit',
              foreColor : 'inherit',
              height    : '100%',
              type      : 'line',
              toolbar   : {
                  show: false
              },
              zoom      : {
                  enabled: false
              }
          },
          colors     : ['#64748B', '#94A3B8'],
          dataLabels : {
              enabled        : true,
              enabledOnSeries: [0],
              background     : {
                  borderWidth: 0
              }
          },
          grid       : {
              borderColor: 'var(--fuse-border)'
          },
          labels     : this.data.githubIssues.labels,
          legend     : {
              show: false
          },
          plotOptions: {
              bar: {
                  columnWidth: '50%'
              }
          },
          series     : this.data.githubIssues.series,
          states     : {
              hover: {
                  filter: {
                      type : 'darken',
                      value: 0.75
                  }
              }
          },
          stroke     : {
              width: [3, 0]
          },
          tooltip    : {
              followCursor: true,
              theme       : 'dark'
          },
          xaxis      : {
              axisBorder: {
                  show: false
              },
              axisTicks : {
                  color: 'var(--fuse-border)'
              },
              labels    : {
                  style: {
                      colors: 'var(--fuse-text-secondary)'
                  }
              },
              tooltip   : {
                  enabled: false
              }
          },
          yaxis      : {
              labels: {
                  offsetX: -16,
                  style  : {
                      colors: 'var(--fuse-text-secondary)'
                  }
              }
          }
      };

}

}
