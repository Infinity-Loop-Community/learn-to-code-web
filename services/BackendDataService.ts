export default class BackendDataService {

  async send<T>(url: string, method: 'GET' | 'POST', body: string | undefined, cookieValue?: string, allowCache = true): Promise<T> {
    let requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (cookieValue) {
      requestHeaders['cookie'] = cookieValue
    }

    const res = await fetch(url, {
      method: method,
      body: body,
      headers: requestHeaders,
      credentials: 'include',
    })

    if (!res.ok) {
      throw new Error(`fetch error, status: ${res.status} ${await res.text()}`)
    }

    return (await res.json()) as T
  }

}
