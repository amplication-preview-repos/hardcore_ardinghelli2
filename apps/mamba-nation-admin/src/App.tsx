import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticlesList } from "./articles/ArticlesList";
import { ArticlesCreate } from "./articles/ArticlesCreate";
import { ArticlesEdit } from "./articles/ArticlesEdit";
import { ArticlesShow } from "./articles/ArticlesShow";
import { CommentsList } from "./comments/CommentsList";
import { CommentsCreate } from "./comments/CommentsCreate";
import { CommentsEdit } from "./comments/CommentsEdit";
import { CommentsShow } from "./comments/CommentsShow";
import { AuthorsList } from "./authors/AuthorsList";
import { AuthorsCreate } from "./authors/AuthorsCreate";
import { AuthorsEdit } from "./authors/AuthorsEdit";
import { AuthorsShow } from "./authors/AuthorsShow";
import { TagsList } from "./tags/TagsList";
import { TagsCreate } from "./tags/TagsCreate";
import { TagsEdit } from "./tags/TagsEdit";
import { TagsShow } from "./tags/TagsShow";
import { CategoriesList } from "./categories/CategoriesList";
import { CategoriesCreate } from "./categories/CategoriesCreate";
import { CategoriesEdit } from "./categories/CategoriesEdit";
import { CategoriesShow } from "./categories/CategoriesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MambaNation"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Articles"
          list={ArticlesList}
          edit={ArticlesEdit}
          create={ArticlesCreate}
          show={ArticlesShow}
        />
        <Resource
          name="Comments"
          list={CommentsList}
          edit={CommentsEdit}
          create={CommentsCreate}
          show={CommentsShow}
        />
        <Resource
          name="Authors"
          list={AuthorsList}
          edit={AuthorsEdit}
          create={AuthorsCreate}
          show={AuthorsShow}
        />
        <Resource
          name="Tags"
          list={TagsList}
          edit={TagsEdit}
          create={TagsCreate}
          show={TagsShow}
        />
        <Resource
          name="Categories"
          list={CategoriesList}
          edit={CategoriesEdit}
          create={CategoriesCreate}
          show={CategoriesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
