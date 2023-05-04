import React from "react";
import Adoration from './pdfs/Adoration.pdf';
import Romance from './pdfs/Romance-in-F.pdf';
import Brahms from './pdfs/Brahms.pdf';
import Dido from './pdfs/Didos-lament.pdf';
import Clementine from './pdfs/Clementine.pdf';
import NunWill from './pdfs/Nun-will.pdf';
import Schumann from './pdfs/Schumann.pdf';
import './arrangements.css';

export function Arrangements() {
    return(
    <div>
        <h3>Viola Ensemble Arrangements</h3>
        <p>The following arrangements are of public domain works. I created these arrangements for virtual performances during the COVID-19 pandemic. You may download them free of charge! Please inform me of any performances</p>
        <ul class='arr-list'>
                <li><a class='pdf' href={Adoration} target="_blank" rel="noreferrer">Adoration by Florence Price</a> for Four Violas</li>
                <li><a class='pdf' href={Romance} target='_blank' rel='noreferrer'>Romance in F Major by Ludwig van Beethoven</a> for Four Violas</li>
                <li><a class='pdf' href={Brahms} target='_blank' rel='noreferrer'>Andante un poco Adagio by Johannes Brahms</a> for Four Violas</li>
                <li><a class='pdf' href={Dido} target='_blank' rel='noreferrer'>Dido's Lament by Henry Purcell</a> for Five Violas</li>
                <li><a class='pdf' href={Clementine} target='_blank' rel='noreferrer'>Oh My Darlin' Clementine by Florence Price</a> for Four Violas</li>
                <li><a class='pdf' href={NunWill} target='_blank' rel='noreferrer'>Nun will die Sonn' so hell aufgehen by Gustav Mahler</a> for Four Violas</li>
                <li><a class='pdf' href={Schumann} target='_blank' rel='noreferrer'>Im Wunderschoenen Monat Mai by Robert Schumann</a> for Two Violas</li>
            </ul>
    </div>)
}