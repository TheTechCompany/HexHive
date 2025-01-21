import styles from './page.module.css';

export default function FeaturePage(){

    const features = [
        {
            label: "Scheduling",
            available: true
        },
        {
            label: "File management",
            available: true
        },
        {
            label: "Accounting & Expense management"
        },
        {
            label: "Reporting"
        },
        {
            label: "CRM"
        },
        {
            label: "Project management"
        },
        {
            label: "Automation"
        },
        {
            label: "Process management"
        },
        {
            label: "Legacy integrations"
        },
        {
            label: "Messaging"
        }
    ]

    return (
        <div className={styles.featureList}>
            {features.map((feature) => (
                <div>
                    <h4>{feature.label}</h4>

                    <span>
                        {feature.available ? (
                            "Available now"
                        ) : "Coming soon"}
                    </span>
                </div>
            ))}
        </div>
    )
}