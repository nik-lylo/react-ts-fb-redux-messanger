import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { IRoute, privateRoutes, publicRoutes } from "..";
import { useTypedSelector } from "../../lib/hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((s) => s.authReducer);

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
                  >
                    {child.children?.map((item: IRoute) => (
                      <Route
                        path={item.path}
                        element={<item.element />}
                        key={item.path}
                      />
                    ))}
                  </Route>
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
