function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 0 && currentMonth <= 6

    if (!isSpring) {
        return <div>Cen n'est pas le moment mon ami !</div>
    }
    return <div>C'est le printemps ! </div>
}

export default Recommendation