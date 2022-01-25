import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <h1>Applications</h1>
      <nav>
        <Link className="nav__item" to="/pubsub">Pub Sub</Link>
      </nav>
    </div>
  )
}
