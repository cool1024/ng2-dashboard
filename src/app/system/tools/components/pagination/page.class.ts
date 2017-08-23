export class Page {
  constructor(public total: number = 0, public page: number = 1, public limit = 10) { }

  get offset(): number {
    return (this.page - 1) * this.limit
  }

  get pageData(): any {
    return { limit: this.limit, offset: this.offset }
  }

  getpageDataWith(params: any = {}): any {
    params.limit = this.limit
    params.offset = this.offset
  }

  reset() {
    this.total = 0
    this.page = 1
    this.limit = 10
  }
}
