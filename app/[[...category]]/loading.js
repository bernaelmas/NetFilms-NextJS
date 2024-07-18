import React from "react";
import CategoriesLoding from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

function Loading(){
    return (
        <div>
            <FeatureMovieLoading/>
            <CategoriesLoding/>
            <MoviesSectionLoading/>
            <MoviesSectionLoading/>
            <MoviesSectionLoading/>
        </div>
    )
}

export default Loading;
