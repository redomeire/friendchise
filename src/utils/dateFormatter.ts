const dateFormatter = (date: string) => {
    let newDate = new Date(date)

    const getYear = newDate.toLocaleDateString('default', { year: 'numeric' })
    const getMonth = newDate.toLocaleDateString('default', {month: '2-digit'})
    const getDay = newDate.toLocaleDateString('default', { day: '2-digit' })

    const formattedDate = `${getYear}-${getMonth}-${getDay}`

    return formattedDate
}

export { dateFormatter }
