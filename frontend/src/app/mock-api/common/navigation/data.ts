/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
    id      : 'records',
    title   : 'Manage Records',
    subtitle: 'Documents And Records',
    type    : 'group',
    icon    : 'heroicons_outline:home',
    children: [
        {
            id   : 'records.dashboard',
            title: 'Dashboard',
            type : 'basic',
            icon : 'heroicons_outline:home',
            link : '/records/dashboard'
        },
        {
            id   : 'records.province',
            title: 'Provinces',
            type : 'basic',
            icon : 'heroicons_outline:map',
            link : '/records/province'
        },
        {
            id   : 'records.ministry',
            title: 'Ministries',
            type : 'basic',
            icon : 'heroicons_outline:book-open',
            link : '/records/ministry'
        },
        {
            id   : 'records.finance',
            title: 'Finance ',
            type : 'basic',
            icon : 'heroicons_outline:cash',
            link : '/records/finance'
        },
        {
            id   : 'records.procurement',
            title: 'Procurement',
            type : 'basic',
            icon : 'heroicons_outline:shopping-cart',
            link : '/records/procurement'
        },
      
        {
            id   : 'records.humanresources',
            title: 'Human Resource',
            type : 'basic',
            icon : 'heroicons_outline:user-group',
            link : '/records/humanresources'
        },
        {
            id   : 'records.project',
            title: 'Projects ',
            type : 'basic',
            icon : 'heroicons_outline:archive',
            link : '/records/project'
        },
    ]
},
{
    id      : 'users',
    title   : 'Manage Users',
    subtitle: 'Accounts and Users',
    type    : 'group',
    icon    : 'heroicons_outline:home',
    children: [
        {
            id   : 'accounts.users',
            title: 'Accounts',
            type : 'basic',
            icon : 'heroicons_outline:users',
            link : '/accounts/users'
        },
       
       
    ]
},
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'records',
    title   : 'Manage Records',
    subtitle: 'Documents And Records',
    type    : 'group',
    icon    : 'heroicons_outline:home',
    children: [
        {
            id   : 'records.dashboard',
            title: 'Dashboard',
            type : 'basic',
            icon : 'heroicons_outline:home',
            link : '/records/dashboard'
        },
        {
            id   : 'records.church',
            title: 'Church Archives',
            type : 'basic',
            icon : 'heroicons_outline:library',
            link : '/records/church'
        },
        {
            id   : 'records.finance',
            title: 'Finance Archives',
            type : 'basic',
            icon : 'heroicons_outline:cash',
            link : '/records/finance'
        },
        {
            id   : 'records.project',
            title: 'Projects Archives',
            type : 'basic',
            icon : 'heroicons_outline:archive',
            link : '/records/project'
        },
        {
            id   : 'records.school',
            title: 'Church Schools',
            type : 'basic',
            icon : 'heroicons_outline:book-open',
            link : '/records/school'
        }
    ]
},
{
    id      : 'users',
    title   : 'Manage Users',
    subtitle: 'Accounts and Users',
    type    : 'group',
    icon    : 'heroicons_outline:home',
    children: [
        {
            id   : 'accounts.users',
            title: 'Accounts',
            type : 'basic',
            icon : 'heroicons_outline:users',
            link : '/accounts/users'
        },
       
       
    ]
},
];
