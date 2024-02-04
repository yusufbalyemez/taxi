
import {isAdmin}  from "../config/isAdmin";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";
//Eğer pathname de /admin yazılıysa Layout değişkenine AdminLayout'u at değilse MainLayout. (Nice idea)

export const ContainerLayout = isAdmin ? AdminLayout : MainLayout;