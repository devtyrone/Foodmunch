import React from 'react';

// const dealsData = [
//   {
//     day: 'MONDAY',
//     item: '6-count Zingers®',
//     price: '$9.99',
//     description: 'Available for dine-in. Available for pick-up and delivery with $15 minimum purchase. Use code "ZINGERMON"',
//   },
//   {
//     day: 'MONDAY & TUESDAY',
//     item: 'Barbecue Baby Back Ribs',
//     price: '$15.99',
//     description: '',
//   },
//   {
//     day: 'TUESDAY',
//     item: 'Kids Eat Free',
//     price: '',
//     description: 'Get one FREE kids meal with purchase of $10 food item. Limit 2 per table.',
//   },
//   {
//     day: 'WEDNESDAY',
//     item: '12-Count Wings',
//     price: '$11.99',
//     description: 'Available for dine-in. Available for pick-up and delivery with $15 minimum purchase. Use code "WINGWED"',
//   },
//   {
//     day: 'WEDNESDAY',
//     item: '24-Count Wings',
//     price: '$23.99',
//     description: 'Available for dine-in. Available for pick-up and delivery with $15 minimum purchase. Use code "WINGWED24"',
//   },
//   {
//     day: 'THURSDAY & SUNDAY',
//     item: '12 oz. or 16 oz. Prime Rib',
//     price: 'Starting at $19.99',
//     description: 'While supplies last!',
//   },
// ];

const operatingHoursData = [
  { day: 'MONDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'TUESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'WEDNESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'THURSDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'FRIDAY', open: '8:00 AM', close: '11:00 PM' },
  { day: 'SATURDAY', open: '9:00 AM', close: '11:00 PM' },
];

const OperatingHoursSection = () => {
  return (
    <section className="w-full bg-[#82afa8] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-extrabold text-white text-center mb-4 leading-tight">DAILY DEALS</h2>
        <p className="text-lg text-white text-center mb-12">Deals of the Day, starting at $9.99</p>

        {/* Operating Hours */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Operating Hours</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-white text-lg">
            {operatingHoursData.map((day, index) => (
              <div key={index} className="bg-[#82afa8] p-4 rounded-lg border border-gray-300">
                <p className="font-semibold">{day.day}</p>
                <p>{day.open} - {day.close}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Deals Grid - Removed */}
      </div>
    </section>
  );
};

export default OperatingHoursSection;
