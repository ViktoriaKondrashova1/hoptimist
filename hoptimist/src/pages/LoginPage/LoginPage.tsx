import type { FC } from "react";
import {Card} from "antd"
import {AppTitle} from "@/shared/components/ui/AppTitle/AppTitle"
import {AppText} from "@/shared/components/ui/AppText/AppText"
import { Link } from 'react-router-dom'
import {LoginForm} from "./components/LoginForm/LoginForm"

export const LoginPage: FC = () => {
  return (
    <Card style={{ maxWidth: 400, margin: "auto" }}>
      <AppTitle level={2} style={{ textAlign: 'center', fontWeight: 300 }}>Login</AppTitle>
      <LoginForm />
      <div style={{ textAlign: 'center' }}>
        <AppText>
          Don't have an account?
          {' '}
          <Link to="/register">Register</Link>
        </AppText>
      </div>
    </Card>
  )
};
