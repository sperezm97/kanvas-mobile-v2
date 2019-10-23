interface ConfigUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  verify_password: string;
  default_company: string;
  app?: string;
}
interface ConfigDevice {
  deviceId: number;
  app: string;
}

interface ConfigCompany {
  name: string;
  profile_image: string;
  website: string;
  users_id: number;
  address: string;
  zip: number;
  email: string;
  language: number;
  timezone: string;
  currency_id: number;
}

interface ConfigBranchCompany {
  name: string;
  description: string;
  is_default: number;
}

export { ConfigUser, ConfigDevice, ConfigCompany, ConfigBranchCompany };
