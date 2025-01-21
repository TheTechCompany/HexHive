import Link from 'next/link'
import styles from './page.module.css'

export default function PricingPage(){

    const pricing = [
        {
            label: "Solopreneur",
            user: '$5/user/month'
        },
        {
            label: "Small team",
            user: '$50/user/month'
        },
        {
            label: "Enterprise",
            user: 'Contact for pricing'

        }
    ]

    return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', gap: '12px', alignItems: 'center'}}>

            {pricing.map((option) => (
                <div className={styles.pricingContainer}>
                    <h4>{option.label}</h4>
                    <hr />
                    <div>
                        <p style={{textAlign: 'center'}}>
                            {option.user}
                        </p>
                    </div>

                        <Link href="/signup">
                            Get started
                        </Link>
                </div>
            ))}

        </div>
    )
}