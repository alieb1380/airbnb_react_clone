import Footer from '../components/Footer';
import Header from './../components/Header';
import { useRouter } from "next/dist/client/router";
import { format } from 'date-fns';

function search({ searchResult }) {
    const router = useRouter();

    console.log(searchResult);
    // ES6 Destructor
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "MM dd yyyy");
    const formattedEndDate = format(new Date(endDate), "MM dd yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} ${noOfGuests} guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - {noOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More Filters</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default search

export async function getServerSudeProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}