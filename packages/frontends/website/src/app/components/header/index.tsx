'use client';
import styles from './header.module.css';
import HiveLogo from '../../assets/hivelogo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {

    const pages = [
        {
            label: "Features",
            slug: "/features"
        },
        {
            label: "Pricing",
            slug: "/pricing"
        },
    ]

    const path = usePathname()

    const isSignup = path.indexOf('/signup') > -1;
    
    return (
        <div className={styles.header}>
            <Link style={{height: '50%'}} href="/">
                <img style={{height: '100%'}} src={HiveLogo.src} />
            </Link>

            {!isSignup ? (
                <div style={{display: 'flex', alignItems: 'center'}}>

                <div style={{display: 'flex', gap: '12px', marginRight: '12px'}}>
                    {pages.map((page) => (
                        <Link className={styles.pageLink} href={page.slug}>
                            <div>{page.label}</div>
                            <hr className={path.indexOf(page.slug) > -1 ? styles.active : ''} />
                        </Link>
                    ))}
                </div>
                <div className={styles.headerActions}>

                    <Link href="/signup">
                        <div>Signup</div>
                    </Link>
                    <Link href="/login">
                        <div>Login</div>
                    </Link>
                </div>
                
            </div>) : null}
        </div>
    )
}