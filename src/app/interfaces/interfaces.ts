export interface MenuItem {
  icon: string;
  name: string;
  redirectTo: string;
  group?: string;
  icongroup?: string;
  options?: MenuItem[];
  expanded?: boolean;
}
