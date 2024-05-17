import { StyleSheet } from "../domain/stylesheet"

export function ScrollAnimationPage() {
    return (
        <div className='snap-y snap-mandatory h-screen' style={styles.container}>
            <section className='' style={{...styles.section, ...{backgroundColor: 'blue'}}}>
                <h1> 1</h1>
            </section>
            <section className='' style={{...styles.section, ...{backgroundColor: 'orange'}}}>
            <h1 style={{  }}> 2</h1>

            </section>
            <section className='' style={{...styles.section, ...{backgroundColor: 'green'}}}>
            <h1 style={{  }}> 3</h1>
            </section>
        </div>
    )
}

const styles = StyleSheet.create({
    container: { 
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory'
    },

    section: {
        height: '100vh',
        scrollSnapAlign: 'center',
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
    }
})