import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Image, Badge, Stack, Button } from "react-bootstrap";
import axios from "axios";

const PokeDetails = () => {
  const { name } = useParams();
  const [detailsPokemons, setDetailsPokemons] = useState(undefined);

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setDetailsPokemons(response.data);
        console.log(detailsPokemons);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchStat();
  }, [name]);

  return (
    <>
      {(detailsPokemons?.stats.length >= 1 && (
        <div className="container mt-5">
          <div className="row">
            <div className="d-flex justify-content-center gap-5">
              <Image
                thumbnail
                src={detailsPokemons.sprites.other.dream_world.front_default}
                alt="pokemon"
                className="w-30 shadow-lg p-4"
              />
              <div className="ml-2">
                <h5 className="text-capitalize fs-2 text-success">{detailsPokemons.name}</h5>
                <ul>
                  {detailsPokemons.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      <p>
                        <span className="fs-5 text-capitalize strong">{stat.stat.name}</span>: {stat.base_stat}
                      </p>
                    </li>
                  ))}
                </ul>

                <Stack direction="horizontal" gap={2}>
                  {detailsPokemons.types.map((type) => (
                    <Badge key={type.type.name} className="text-capitalize fs-5" bg="danger" >
                      {type.type.name}
                    </Badge>
                  ))}
                </Stack>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/pokemons">
                <Button variant="secondary">
                  Back to Pokémon List
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PokeDetails;
