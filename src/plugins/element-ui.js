import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

import {
  Container,
  Aside,
  Header,
  Main,
  Tabs,
  TabPane,
  Link,
  Timeline,
  TimelineItem,
  Card,
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
  MenuItemGroup,
  Row,
  RadioGroup,
  Radio,
  Col,
  Avatar,
  Popover,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Image,
  Input,
  Dialog,
  Upload,
  Tag,
  Step,
  Badge,
  Backtop,
  Steps,
  Checkbox,
  Pagination,
  CheckboxGroup,
  Select,
  Collapse,
  Option,
  DatePicker,
  CollapseItem,
  Cascader,
  TimePicker,
  Switch,
  Button,
  Progress,
  Alert,
  Loading,
  Message,
  MessageBox,
  Notification,
  Transfer
} from 'element-ui';

const components = [
  Progress,
  Tag,
  Dialog,
  Step,
  Option,
  Link,
  TimePicker,
  Switch,
  Transfer,
  Cascader,
  Pagination,
  Badge,
  Backtop,
  DatePicker,
  Checkbox,
  CheckboxGroup,
  Steps,
  Tabs,
  Upload,
  Select,
  RadioGroup,
  Radio,
  Button,
  Collapse,
  CollapseItem,
  Timeline,
  TimelineItem,
  Card,
  Alert,
  Avatar,
  TabPane,
  Popover,
  Table,
  TableColumn,
  Input,
  Form,
  FormItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  Image,
  BreadcrumbItem,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Header,
  Main,
  Container,
  Aside,
]

Vue.use(Loading.directive);

components.forEach(component => Vue.use(component))
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;