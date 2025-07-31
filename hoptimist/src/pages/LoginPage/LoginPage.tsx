import type { FC } from "react";
import {Card} from "antd"
import {AppTitle} from "@/shared/components/ui/AppTitle/AppTitle"
import {AppText} from "@/shared/components/ui/AppText/AppText"
import { Link } from 'react-router-dom'

export const LoginPage: FC = () => {
  return (
    <Card>
      <AppTitle level={2} style={{ textAlign: 'center' }}>Login</AppTitle>
      <div style={{ textAlign: 'center' }}>
        <AppText>
          Don't have an account?
          {' '}
          <Link to="/register">Register</Link>
        </AppText>
      </div>
    </Card>)
};
