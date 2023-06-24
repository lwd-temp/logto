import { useContext } from 'react';

import { TenantsContext } from '@/contexts/TenantsProvider';
import useValidateTenantAccess from '@/hooks/use-validate-tenant-access';
import useUserOnboardingData from '@/onboarding/hooks/use-user-onboarding-data';

import AutoCreateTenant from './AutoCreateTenant';
import Redirect from './Redirect';
import TenantLandingPage from './TenantLandingPage';

export default function Main() {
  const { tenants } = useContext(TenantsContext);
  const { isOnboarding } = useUserOnboardingData();

  useValidateTenantAccess();

  /**
   * If current tenant ID is not set, but there is at least one tenant available,
   * trigger a redirect to the first tenant.
   */
  if (tenants[0]) {
    return <Redirect />;
  }

  // A new user has just signed up and has no tenant, needs to create a new tenant.
  if (isOnboarding) {
    return <AutoCreateTenant />;
  }

  // If user has completed onboarding and still has no tenant, redirect to a special landing page.
  return <TenantLandingPage />;
}
