import index from "@/components/index";
import order from "@/components/order/order";
import material from "@/components/material/material";
import formula from "@/components/material/formula";
import style from "@/components/material/style";
export default [
{
  path: "/",
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
    component: material
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
  }]
}];