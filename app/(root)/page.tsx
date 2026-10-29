import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSiderBar from "@/components/RightSiderBar";

const Home = () => {
    const loggedIn = { firstName: 'Astrid', lastName: 'Vnt', email: 'ast@hotmail.com' }
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.firstName || 'Ghest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSiderBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 789.78 }, {currentBalance: 700.20}]}
            />
        </section>
    )
}

export default Home