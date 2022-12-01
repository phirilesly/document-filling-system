/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';


export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard'
    },
    {
        id: 'records',
        title: 'Manage Documents',
        type    : 'basic',
        icon: 'heroicons_outline:collection',
        link: '/documents'
       
    },
    {
        id: 'settings',
        title: 'Settings',
        type    : 'aside',
        icon: 'heroicons_outline:cog',
        children: [
            {
                id: 'settings.profile',
                title: 'My profile',
                type: 'basic',
                icon: 'heroicons_outline:user-circle',
                link: '/accounts/my-profile'
            },
            {
                id: 'settings.members',
                title: 'Team members',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/accounts/members'
            },


        ]
    },
];
