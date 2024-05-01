import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Breadcrumb,
  FallBack,
  Footer,
  NavHeader,
  ScrollIndicator,
} from "./styled-compoenents";

const LandingPage = lazy(() => import("./pages/LandingPage.js"));
const CountryPage = lazy(() => import("./pages/CountryPage.js"));
const RegionPage = lazy(() => import("./pages/RegionPage.js"));
const TopCitiesPage = lazy(() => import("./pages/TopCitiesPage.js"));
const PlaceDetailsPage = lazy(() => import("./pages/PlaceDetailsPage.js"));
const SearchPage = lazy(() => import("./pages/SearchPage.js"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollIndicator />
      <NavHeader />
      <Suspense fallback={<FallBack />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <LandingPage />
              </>
            )}
          />
          <Route path="/search" render={() => <SearchPage />} />
          <Route
            exact
            path="/:region/:country/:typeOfplace"
            render={() => (
              <>
                <Breadcrumb />
                <TopCitiesPage />
              </>
            )}
          />
          <Route
            exact
            path="/:region/:country/:typeOfplace/:placeName"
            render={() => (
              <>
                <Breadcrumb />
                <PlaceDetailsPage />
              </>
            )}
          />
          <Route
            exact
            path="/:region/:country"
            render={() => (
              <>
                <Breadcrumb />
                <CountryPage />
              </>
            )}
          />
          <Route
            exact
            path="/:region"
            render={() => (
              <>
                <Breadcrumb />
                <RegionPage />
              </>
            )}
          />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
