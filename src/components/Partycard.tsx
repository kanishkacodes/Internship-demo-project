import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link';

function Partycard() {

    const party = [
        {
          heading: "The Spirituous Package",
          duration: "3 Hours of Drinks",
          
          beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
          food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
        },
        {
          heading: "The Spirituous Package",
          duration: "3 Hours of Drinks",
    
          beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
          food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
        },
        {
          heading: "The Spirituous Package",
          duration: "3 Hours of Drinks",
    
          beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
          food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
        },
        {
          heading: "The Spirituous Package",
          duration: "3 Hours of Drinks",
    
          beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
          food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
        },
        {
          heading: "The Spirituous Package",
          duration: "3 Hours of Drinks",
    
          beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
          food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
        },
        {
            heading: "The Spirituous Package",
            duration: "3 Hours of Drinks",
           
            beverages: "Whisky Jw Red Label Jim Beam Black & White Black Dog 8yrs Teacher’s Highland Cream Oaksmith Gold. Rum Bacardi Carta Blanca (White) Bacardi Carta Oro (Gold) Old Monk Vodka Ketel One Magic Moment Verve. Gin Gordon’s (Lb) Blue Riband Wines Domestic Wines (Lb) Selection Of Artisan Cocktails Freshly Brewed Beers (Availability Of The Day) Canned Juices Mocktails.",
            food: "4 Veg & 3 Non-Veg Starters 4 Veg & 3 Non-Veg Main Course Any 3 Among Salad & Staples 3 Desserts & 1 Ice-Cream."
          }
        ];
        
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
    <div className="absolute inset-0 z-0">
        <Image
            src="https://images.unsplash.com/photo-1482575832494-771f74bf6857?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="reservation"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
        />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 p-4 md:p-8 lg:p-12">
        {party.map((package, index) => (
            <div key={index} className="bg-white bg-opacity-70 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 md:mb-6 text-left md:text-center">{package.heading}</h2>
                    <span> Duration: </span><p className="text-sm text-gray-800 mb-4">{package.duration}</p>
                    <span> Beverages: </span><p className="text-sm text-gray-800 mb-4">{package.beverages}</p>
                    <span> Food: </span><p className="text-sm text-gray-800 mb-4">{package.food}</p>
                    <Link href="/">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-3 rounded-lg mr-4">
                            Venue
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-3 rounded-lg">
                           Packages
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg ml-3 ">
                            Enquiry
                        </button>
                    </Link>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Partycard
