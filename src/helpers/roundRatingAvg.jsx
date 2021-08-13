import React from "react";
import Star from "../components/Star";

export default function roundRatingAvg(rating) {
    const round = Math.round(rating);
    if (round === 1) {
        return (
            <div className="row mb-1">
                <div className="col-12 d-flex">
                    <Star></Star>
                </div>
            </div>
        )
    } else if (round === 2) {
        return (
            <div className="row mb-1">
                <div className="col-12 d-flex">
                    <Star></Star>
                    <Star></Star>
                </div>
            </div>
        )
    } else if (round === 3) {
        return (
            <div className="row mb-1">
                <div className="col-12 d-flex">
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
            </div>
        )
    } else if (round === 4) {
        return (
            <div className="row mb-1">
                <div className="col-12 d-flex">
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row mb-1">
                <div className="col-12 d-flex">
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
            </div>
        )
    }
}