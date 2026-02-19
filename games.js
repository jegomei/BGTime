/**
 * Plantillas de juegos de mesa
 * ============================
 * Cada entrada define la configuración de puntuación de un juego.
 * Añade, elimina o edita entradas libremente.
 *
 * Campos disponibles:
 *
 *   name          (string)   Nombre del juego que aparece en el selector
 *   emoji         (string)   Emoji decorativo (opcional)
 *   scoringType   (string)   Tipo de puntuación:
 *                              'rounds'            → rondas simples
 *                              'items'             → ítems al final
 *                              'rounds_with_items' → rondas con categorías
 *                              'target_score'      → hasta puntuación objetivo
 *
 *   --- Solo para scoringType 'rounds' ---
 *   numRounds       (number)  Número de rondas
 *   roundScoringMode (string) 'all_at_end' | 'round_by_round'
 *
 *   --- Solo para scoringType 'items' ---
 *   items  (array)  Lista de ítems: { name: string, negative: boolean }
 *
 *   --- Solo para scoringType 'rounds_with_items' ---
 *   numRounds  (number)  Número de rondas
 *   roundItems (array)   Lista de ítems: { name: string, negative: boolean }
 *
 *   --- Solo para scoringType 'target_score' ---
 *   targetScore (number)  Puntuación para ganar
 */

const GAME_TEMPLATES = [
    {
        name: "Catán",
        emoji: "🏝️",
        scoringType: "target_score",
        targetScore: 10
    },
    {
        name: "Ticket to Ride",
        emoji: "🚂",
        scoringType: "items",
        items: [
            { name: "Rutas", negative: false },
            { name: "Objetivos completados", negative: false },
            { name: "Ruta más larga", negative: false },
            { name: "Objetivos fallidos", negative: true }
        ]
    },
    {
        name: "Carcassonne",
        emoji: "🏰",
        scoringType: "rounds_with_items",
        numRounds: 1,
        roundItems: [
            { name: "Ciudades", negative: false },
            { name: "Caminos", negative: false },
            { name: "Monasterios", negative: false },
            { name: "Campos", negative: false }
        ]
    },
    {
        name: "Dominion",
        emoji: "👑",
        scoringType: "items",
        items: [
            { name: "Provincias", negative: false },
            { name: "Ducados", negative: false },
            { name: "Feudos", negative: false },
            { name: "Jardines", negative: false },
            { name: "Maldiciones", negative: true }
        ]
    },
    {
        name: "7 Wonders",
        emoji: "🏛️",
        scoringType: "items",
        items: [
            { name: "Militar", negative: false },
            { name: "Monedas", negative: false },
            { name: "Maravillas", negative: false },
            { name: "Cultura", negative: false },
            { name: "Comercio", negative: false },
            { name: "Gremios", negative: false },
            { name: "Ciencia", negative: false }
        ]
    },
    {
        name: "Pandemia",
        emoji: "🦠",
        scoringType: "rounds",
        numRounds: 5,
        roundScoringMode: "round_by_round"
    },
    {
        name: "Agrícola",
        emoji: "🌾",
        scoringType: "items",
        items: [
            { name: "Campos", negative: false },
            { name: "Pastos", negative: false },
            { name: "Cereales", negative: false },
            { name: "Verduras", negative: false },
            { name: "Ovejas", negative: false },
            { name: "Jabalíes", negative: false },
            { name: "Vacas", negative: false },
            { name: "Establos vacíos", negative: true },
            { name: "Habitaciones", negative: false },
            { name: "Puntos de cartas", negative: false },
            { name: "Mendicidad", negative: true }
        ]
    }
];
