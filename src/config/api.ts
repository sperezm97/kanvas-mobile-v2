import axios from './axios';
import * as ApiInterfaces from '@utils/types/api';

export default {
  // Auth
  signIn: (data: ApiInterfaces.ConfigUser) => axios.post('/auth/login', data),
  logOut: () => axios.post('/auth/logout'),
  forgot: (email: ApiInterfaces.ConfigUser) =>
    axios.post('/auth/forgot', email),

  // Users
  createUser: (data: ApiInterfaces.ConfigUser) => axios.post('/users', data),
  fetchUsers: (query: string) => axios.get(`/users/${query ? query : ''}`),
  modifyUser: (data: ApiInterfaces.ConfigUser) => axios.put('/users', data),

  //Devices
  attachDevice: (userId: string, data: ApiInterfaces.ConfigDevice) =>
    axios.post(`/users/${userId}/devices`, data),
  detachedDevice: (
    userId: string,
    deviceId: ApiInterfaces.ConfigDevice,
    data: ApiInterfaces.ConfigDevice,
  ) => axios.delete(`/users/${userId}/devices/${deviceId}/detach`, data),
  fetchDevices: (userId: string) => axios.get(`/user/${userId}/devices`),

  // Companies
  createCompany: (data: ApiInterfaces.ConfigCompany) =>
    axios.post('/companies', data),
  fetchAllCompanies: (companyId: string, query: string) =>
    axios.get(
      `/companies/${companyId}?relationships=logo,filesystem${
        query ? query : ''
      }`,
    ),
  fetchCompany: (companyId: string) => axios.get(`/companies/${companyId}`),
  deleteCompany: (companyId: string) => axios.delete(`/companies/${companyId}`),
  modifyCompany: (companyId: string, data: ApiInterfaces.ConfigCompany) =>
    axios.put(`/companies/${companyId}`, data),

  // Branch Companies
  createBranchCompany: (data: ApiInterfaces.ConfigBranchCompany) =>
    axios.post(`/companies-branches`, data),
  fetchBranchCompany: (companyId: string) =>
    axios.get(`/companies-branches/${companyId}`),
  fetchAllBranchCompany: () => axios.get(`/companies-branches`),
  modifyBranchCompany: (
    companyId: string,
    data: ApiInterfaces.ConfigBranchCompany,
  ) => axios.put(`/companies-branches/${companyId}`, data),
  deleteBranchCompany: (companyId: string) =>
    axios.delete(`/companies-branches/${companyId}`),
};
