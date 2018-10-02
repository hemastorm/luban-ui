import index from "@/components/index";
import order from "@/components/order/order";
import material from "@/components/material/material";
import formula from "@/components/material/formula";
import style from "@/components/material/style";
import login from "@/components/login/login";
import materialList from "@/components/material/materialTable";
export default [
{
  path: "/login",
  name: "login",
  component: login
},
{
  path: "/index",
  name: "index",
  component: index,
  children: [
  {
    path: "order",
    name: "order",
    component: order
  },
  {
    path: "material",
    name: "material",
    component: material,
    children: [{
      path: "materialList",
      name: "materialList",
      component: materialList
    }]
  },
  {
    path: "formula",
    name: "formula",
    component: formula
  },
  {
    path: "style",
    name: "style",
    component: style
  }],
}];