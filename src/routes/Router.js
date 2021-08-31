import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import ListPostPage from "../pages/listPostPage/ListPostPage"
import PostPage from "../pages/PostPage/PostPage"
import CadastroPage from "../pages/CadastroPage/CadastroPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exct path='/Login'>
                    <LoginPage/>
                </Route>
                <Route exct path='/Cadastro'>
                    <CadastroPage/>
                </Route>
                <Route exct path='/'>
                    <ListPostPage/>
                </Route>
                <Route exct path='/Post'>
                    <PostPage/>
                </Route>
                <Route exct path='/Error'>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router