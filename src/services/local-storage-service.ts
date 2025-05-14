class LocalStorageService {
  isAvailable(): boolean {
    return typeof window !== "undefined" && typeof localStorage !== "undefined"
  }

  getItem<T = string>(key: string): T | null {
    if (!this.isAvailable()) return null

    const item = localStorage.getItem(key)
    try {
      return item ? (JSON.parse(item) as T) : null
    } catch {
      return item as T
    }
  }

  setItem<T = string>(key: string, value: T): void {
    if (!this.isAvailable()) return

    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value)
    localStorage.setItem(key, stringValue)
  }

  removeItem(key: string): void {
    if (!this.isAvailable()) return

    localStorage.removeItem(key)
  }

  clear(): void {
    if (!this.isAvailable()) return

    localStorage.clear()
  }
}

export const localStorageService = new LocalStorageService()
