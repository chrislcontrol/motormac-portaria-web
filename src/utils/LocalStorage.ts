import { companyId, token, user } from "../localStorageConstants";

class LocalStorage {
  setUser(newUser: { username: string }) {
    localStorage.setItem(user, JSON.stringify(newUser))
  };

  setToken(newToken: string) { 
    localStorage.setItem(token, newToken)
  };

  setCompanyId(newCompanyId: string) {
    localStorage.setItem(companyId, newCompanyId);
  };

  getUser() {
    const requiredUser = localStorage.getItem(user) || null
    return requiredUser? JSON.parse(requiredUser) : null
  };
}

export default new LocalStorage();