const tokenKey = 'token'

const authService = {
    setToken: (token: string): void => localStorage.setItem(tokenKey, token),
    getToken: (): string|null => localStorage.getItem(tokenKey),
    removeToken: (): void => localStorage.removeItem(tokenKey),
}

export {authService};