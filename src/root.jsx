// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {

  const closeDropdownOnClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="navbar bg-base-300">
              <div class="navbar-start">
                <div class="dropdown">
                  <label tabIndex={0} class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </label>
                  <ul tabIndex={0} onClick={() => closeDropdownOnClick()} class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><A href="/home" >Home</A></li>
                    <li><A href="/quiz-user">Quiz</A></li>
                    <li><A href="/todolist">ToDoList</A></li>
                    <li><A href="/about">About</A></li>
                  </ul>
                </div>
              </div>
              <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-xl" href="/home">Solid Start Quiz Project</a>
              </div>
              <div class="navbar-end">
              </div>
            </div>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
