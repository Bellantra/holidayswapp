import React, { useEffect, useState } from 'react';
import AnnouncementCard from './Card.jsx';
import { useSelector } from 'react-redux';
import "./Countries.css"

export default function City_Cards() {
    const announcement = useSelector((state) => state.Homes);
    const [currentPage, setCurrentPage] = useState(0);

    const next_Page = () => {
        if(announcement.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    };
    const prev_Page = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 10);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(announcement.length - 10)
    };
    useEffect(() => {
        first_Page()
    }, [Homes]);

const Filtred_Announcement = announcement.slice(currentPage, currentPage + 10);

return (
    <div>
        {Filtred_Announcement.length >= 10 ? (
            <div>
        <button className="button" onClick={first_Page}> {"<<"}</button>
        <button className="button" onClick={prev_Page}> {"<"}</button>
        <button className="button" onClick={next_Page}> {">"}</button>
        <button className="button" onClick={last_Page}> {">>"}</button>
        </div>
        ): null}
        <div className="grid">
        {Filtred_Country.map((e)  => (
        <AnnouncementCard
        id = {e.id}
        owner = {e.owner}
        image = {e.image[0]}
        country = {e.country}
        city = {e.city}
        points = {e.points}
        />
        ))}
      </div>
    </div>
)
}