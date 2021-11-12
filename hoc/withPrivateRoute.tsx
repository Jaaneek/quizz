import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSigninCheck } from "reactfire";

const withPrivateRoute = (WrappedComponent: any) => {
  const ComponentWithPrivateRoute = (props: any) => {
    const { status, data: signInCheckResult } = useSigninCheck();
    const router = useRouter();

    useEffect(() => {
      if (!signInCheckResult?.signedIn) router.replace("/");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, signInCheckResult]);

    if (false) return <div>Loading...</div>;
    if (!signInCheckResult?.signedIn) return <div>Loading...</div>;

    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};

export default withPrivateRoute;
