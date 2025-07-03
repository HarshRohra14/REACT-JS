import React from 'react'

export default function About() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Text Section */}
                    <div className="w-full lg:w-6/12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
                            Find your perfect feline friend — adopt or rent a cat today!
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Whether you're ready to give a loving home or just looking for a weekend cuddle buddy,
                            our service connects you with adorable, healthy cats waiting to be loved. 
                            Choose to adopt for life, or rent a furry companion short-term.
                        </p>
                        <p className="text-gray-600">
                            From playful kittens to calm senior cats, we ensure each feline is vaccinated,
                            well-groomed, and cared for. Experience the joy of a cat without long-term commitment — 
                            or make that bond forever. The choice is yours.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-6/12 flex justify-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
                            alt="Adopt or Rent a Cat"
                            className="max-w-full h-auto rounded-lg shadow-lg"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/400x300?text=Image+not+found";
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
