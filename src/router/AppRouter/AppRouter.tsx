import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { IRoute, privateRoutes, publicRoutes } from "..";
import { useTypedSelector } from "../../lib/hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);

  return (
    <>
      <Routes>
        {isAuth
          ? privateRoutes.map((it: IRoute) => (
              <Route key={it.path} path={it.path} element={<it.element />}>
                {it.children?.map((child: IRoute) => (
                  <Route
                    path={child.path}
                    element={<child.element />}
                    key={child.path}
                  />
                ))}
              </Route>
            ))
          : publicRoutes.map((it: IRoute) => (
              <Route key={it.path} path={it.path} element={<it.element />}>
                {it.children?.map((child: IRoute) => (
                  <Route
                    path={child.path}
                    element={<child.element />}
                    key={child.path}
                  />
                ))}
              </Route>
            ))}
      </Routes>
    </>
  );
};

export default AppRouter;
