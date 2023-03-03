const rupiahFormatter = (currency: string | number) => {
    const num = typeof currency === 'string' ? parseInt(currency) : currency

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(num)
}

export { rupiahFormatter }
