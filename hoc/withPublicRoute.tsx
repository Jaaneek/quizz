import { useRouter } from "next/router";

const withPublicRoute = (WrappedComponent: any) => {
  const ComponentWithPublicRoute = (props: any) => {
    // const { status, data: signInCheckResult } = useSigninCheck()
    const router = useRouter();

    // useEffect(() => {
    //   if (signInCheckResult?.signedIn) router.replace('/dashboard')
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [status, signInCheckResult])
    const status = "loading";
    const signInCheckResult = true;
    if (false) return <div>Loading...</div>;
    if (false) return <div>Loading...</div>;

    return <WrappedComponent {...props} />;
  };

  return ComponentWithPublicRoute;
};

export default withPublicRoute;
