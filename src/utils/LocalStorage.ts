class LocalStorage {
  setUser(user: { username: string }) {
    localStorage.setItem('user', JSON.stringify(user))
  };

  setToken(token: string) { 
    localStorage.setItem('token', token)
  };
}

export default new LocalStorage();