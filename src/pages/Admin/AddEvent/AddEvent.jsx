import axios from 'axios';
import React from 'react';
import { BsCloudArrowUp } from "react-icons/bs";
import Swal from 'sweetalert2';

const AddEvent = () => {

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const organizationName = form.organizationName.value;
        const location = form.location.value;
        const numberOfVolunteers = form.numberOfVolunteers.value;
        const date = form.date.value;
        const time = form.time.value;
        const contactEmail = form.contactEmail.value;
        const imageUrl = form.imageUrl.value;
        const description = form.description.value;
        console.log(title, organizationName, date, time, location, numberOfVolunteers, contactEmail, imageUrl);

        // Prepare the data to be sent
        const volunteerData = {
            eventTitle: title,
            organizationName: organizationName,
            eventLocation: location,
            numOfVolunteers: numberOfVolunteers,
            eventDate: date,
            time: time,
            contactEmail: contactEmail,
            imageURL: imageUrl,
            description: description

        };

        try {
            const response = await axios.post('http://localhost:3000/event', volunteerData);
            console.log(response.data.message);
            console.log('Data submitted successfully:', response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        } catch (error) {
            console.error('Error submitting data:', error.message);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:  error.message,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }

    return (
        <div className='h-full'>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Add Event</h2>
            <div className='bg-[#edeff2] rounded-tl-md px-10 pt-3'>
                <div className='bg-white px-9 py-5 mt-7 rounded-xl'>
                    <form onSubmit={handleSubmit} className=' '>
                        <div className='w-full flex lg:flex-row flex-col lg:gap-10 mb-5'>
                            <div className='lg:w-full space-y-2'>
                                <label className='font-medium' htmlFor="title">Event Title</label>
                                <input type="text" name="title" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />
                            </div>

                            <div className='lg:w-full space-y-2'>
                                <label className='font-medium' htmlFor="organizationName">Organization Name</label>
                                <input type="text" name="organizationName" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />

                            </div>

                        </div>
                        <div className='w-full flex lg:flex-row flex-col lg:gap-10 mb-5'>

                            <div className='lg:w-full space-y-2'>
                                <label className='font-medium' htmlFor="location">Event Location</label>
                                <select name='location' className="select select-bordered select-sm w-full ">

                                    <option>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Khulna</option>
                                    <option>Sylhet</option>
                                    <option>Rajshahi</option>
                                </select>
                            </div>

                            <div className='lg:w-full space-y-2'>
                                <label className='font-medium' htmlFor="numberOfVolunteers">Number of Volunteers</label>
                                <input type="number" name="numberOfVolunteers" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />
                            </div>

                        </div>
                        <div className='w-full flex lg:flex-row flex-col lg:gap-10 mb-5'>
                            <div className='lg:w-1/2 space-y-2'>
                                <label className='font-medium' htmlFor="date">Event Date</label>

                                <input type="date" name="date" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' /></div>
                            <div className='lg:w-1/2 space-y-2'>
                                <label className='font-medium' htmlFor="time">Event Time</label>
                                <input type="time" name="time" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />
                            </div>

                        </div>
                        <div className='w-full flex lg:flex-row flex-col lg:gap-10'>
                            <div className='lg:w-full space-y-2'>
                                <label className='font-medium' htmlFor="contactEmail">Contact Email</label>
                                <input type="email" name="contactEmail" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />
                            </div>

                            <div className="w-full flex flex-col items-start gap-2">
                                <label className='font-medium' >Image URL</label>

                                <input type="text" name="imageUrl" id="" className='border rounded border-[#bdbdbd] w-full py-1 pl-4' />
                            </div>

                        </div>
                        <div className='lg:w-full space-y-2'>
                            <label className='font-medium' htmlFor="description">Description</label>
                            <input type="text" name="description" id="" className='border rounded border-[#bdbdbd] w-full h-40 py-1 pl-4' />
                        </div>

                        <div className='flex justify-end mt-5'>
                            <button className='btn bg-[#2877c1] text-white' type="submit"> Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddEvent;


/**
 * 
 * import { useRef } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

function ImageUploadButton() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <label className="text-sm font-semibold">Banner</label>
            <button
                type="button"
                onClick={handleClick}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 focus:outline-none"
            >
                <CloudArrowUpIcon className="h-5 w-5" />
                Upload image
            </button>
            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])} // Handle file upload here
            />
        </div>
    );
}

export default ImageUploadButton;

 * 
 */