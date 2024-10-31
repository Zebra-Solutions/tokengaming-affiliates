"use client"

import React, { createContext, useContext, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiContextProps {
  getCasinoPolicy: () => Promise<AxiosResponse<any>>;
  getCasinoTerms: () => Promise<AxiosResponse<any>>;
  sendResetPasswordEmail: (email: string) => Promise<AxiosResponse<any>>;
  registerPartner: (partnerData: PartnerData) => Promise<AxiosResponse<any>>;
  signIn: (signInData: SignInData) => Promise<AxiosResponse<any>>;
  getCurrentCasinoInfo: () => Promise<AxiosResponse<any>>;
  trackStag: (stag: string) => Promise<AxiosResponse<any>>;
}

const ApiContext = createContext<ApiContextProps | null>(null);

interface PartnerData {
  company_name: string;
  email: string;
  full_name: string;
  password: string;
  password_confirmation: string;
  terms_accepted: boolean;
  skype?: string;
}

interface SignInData {
  email: string;
  password: string;
  otp_attempt?: string;
}

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const apiBase = 'http://api-staging.devaff.softswiss.net/api';

  const getCasinoPolicy = useCallback(async () => {
    return axios.get(`${apiBase}/client/partner/policy`, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }, []);

  const getCasinoTerms = useCallback(async () => {
    return axios.get(`${apiBase}/client/partner/terms`, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }, []);

  const sendResetPasswordEmail = useCallback(async (email: string) => {
    return axios.post(
      `${apiBase}/client/partner/password`,
      { partner_user: { email } },
      { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } }
    );
  }, []);

  const registerPartner = useCallback(async (partnerData: PartnerData) => {
    return axios.post(`${apiBase}/client/partner`, { partner_user: partnerData }, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }, []);

  const signIn = useCallback(async (signInData: SignInData) => {
    return axios.post(`${apiBase}/client/partner/sign_in`, { partner_user: signInData }, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }, []);

  const getCurrentCasinoInfo = useCallback(async () => {
    return axios.get(`${apiBase}/client/anonymous/current_casino`, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  }, []);

  const trackStag = useCallback(async (stag: string) => {
    return axios.post(
      `${apiBase}/client/partner/track_stag`,
      { stag },
      { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } }
    );
  }, []);

  return (
    <ApiContext.Provider
      value={{
        getCasinoPolicy,
        getCasinoTerms,
        sendResetPasswordEmail,
        registerPartner,
        signIn,
        getCurrentCasinoInfo,
        trackStag,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = (): ApiContextProps => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
