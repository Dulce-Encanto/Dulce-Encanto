const recetas = {
    //Carlotas
    "Carlota de Mango": {
        "Mango (g)": 175,
        "Leche condensada (g)": 60,
        "Leche evaporada (ml)": 53,
        "Galletas Marías (g)": 53,
        "Grenetina (g)":3.5,
        "Agua tibia (ml)":10,
    },
    "Carlota de Limón": {
        "Jugo de limón (ml)": 20,
        "Leche condensada (g)": 66,
        "Leche evaporada (ml)": 59,
        "Galletas Marías (g)": 57
    },
    "Carlota de Piña": {
        "Piña (g)": 175,
        "Leche condensada (g)": 60,
        "Leche evaporada (ml)": 53,
        "Galletas Marías (g)": 53,
        "Grenetina (g)":3.5,
        "Agua tibia (ml)":10,
    },
    //cupcakes
    "Cupcakes": {
        "Harina de chocolate (g)": 36,
        "Huevo (g y u)": { gramos: 12.5, unidades: 0.25 }, // 1 huevo = 50 g
        "Aceite (ml)": 10,
        "Agua (ml)": 20,
        "Chantilly (ml)": 41.67, 
        "Colorante vegetal (gotas)": 0.5,
        "Betún preparado (g)": 41.67,
        "Chispas de colores/chocolate (g)": 15
    },
    //panques
    "Panqué de Naranja": {
        "Azúcar (g)": 25,
        "Ralladura de naranja (u)": 0.33,
        "Huevo (g y u)": { gramos: 16.67, unidades: 0.33 }, // 2 huevos = 100 g
        "Aceite (ml)": 18.67,
        "Yogurt (g)": 10,
        "Jugo de naranja (ml)": 20,
        "Harina (g)": 26.67,
        "Fécula de maíz (g)": 3.33,
        "Polvo para hornear (g)": 2.5
    },
    
    "Panqué de Limón": {
         "Harina (g)": 30,
         "Azúcar (g)": 25,
         "Polvo para hornear (g)": 3.5,
         "Sal(g)":0.3,
         "Mantequilla Derretida (g)": 14,
         "Huevo (g y u)": { gramos: 25, unidades: 0.5 }, // 2 huevos = 100 g
         "Jugo de limón (ml)": 5,
         "Ralladura de limón(g)":1,
    },
    "Panqué de Nuez": {
        "Mantequilla (g)": 25,
        "Azúcar (g)": 25,
        "Huevo (g y u)": { gramos: 25, unidades: 0.5 }, // 2 huevos = 100 g
        "Harina (g)": 30,
        "Nuez picada (g)": 10,
        "Polvo para hornear (g)": 3.5,
        "Sal(g)":0.3,
    },
    //Galletas
    "Galletas con Chispas": {
        "Mantequilla (g)": 40,
        "Azúcar morena/parda (g)": 40,
        "Azúcar blanca (g)": 26.67,
        "Sal (g)": 0.83,
        "Huevo (g y u)": { gramos: 8.33, unidades: 0.17 }, // 1 huevo = 50 g
        "Fecula de maíz (g)": 2.67,
        "Polvo para hornear (g)": 2.5,
        "Bicarbonato (g)": 2.5,
        "Harina (g)": 133.33,
        "Chispas de chocolate (g)": 100
    },
    "Galletas de Red Velvet": {
        "Mantequilla (g)": 40,
        "Azúcar morena/parda (g)": 40,
        "Azúcar blanca (g)": 26.67,
        "Sal (g)": 0.83,
        "Huevo (g y u)": { gramos: 8.33, unidades: 0.17 }, // 1 huevo = 50 g
        "Fecula de maíz (g)": 2.67,
        "Polvo para hornear (g)": 2.5,
        "Bicarbonato (g)": 2.5,
        "Harina (g)": 133.33,
        "Cocoa en polvo (g)": 10,
        "Colorante rojo (gotas)": 0.5
    },
    "Galletas de Chocolate": {
        "Harina (g)": 12,
        "Polvo para hornear (g)": 0.2,
        "Sal (g)": 0.2,
        "Mantequilla (g)": 10,
        "Azúcar blanca (g)": 7,
        "Azúcar morena/parda (g)": 10,
        "Huevo (g y u)": { gramos: 10, unidades: 0.2 }, // 1 huevo = 50 g
        "Extraxto de vainilla (ml)": 1.5,
        "Cocoa en polvo (g)": 4,
    },
    //Gelatinas
    "Gelatina de Piña Colada": {
        "Grenetina(g)": 10,
        "Azucar (g)": 10,
        "Agua Fría (ml)": 25,
        "Piña fresca (g)": 8,
        "coco rallado (g)": 2,
        "Leche de coco (ml)": 3,
        "Extracto de vainilla (ml)": 0.1,
    },
    "Gelatina de Limón": {
        "Gelatina de limón (g)": 5,
        "Agua caliente (ml)": 50,
        "Agua fría (ml)": 50,
        "Limón (g)": 50
    },
    "Gelatina de Mosaico": {
        "Gelatina de fresa (g)": 5,
        "Gelatina de limón (g)": 5,
        "Gelatina de piña (g)": 5,
        "Agua caliente (ml)": 50,
        "Agua fría (ml)": 50,
        "Fresas (g)": 50
    },
};

function calcularIngredientes() {
    const postre = document.getElementById('postre').value;
    const porciones = parseInt(document.getElementById('porciones').value);
    const ingredientes = recetas[postre];

    let resultado = `<h3>Ingredientes para ${porciones} porciones de ${postre}:</h3><ul>`;
    for (const ingrediente in ingredientes) {
        const cantidad = ingredientes[ingrediente];
        if (typeof cantidad === 'object' && 'gramos' in cantidad && 'unidades' in cantidad) {
            const gramos = (cantidad.gramos * porciones).toFixed(2);
            const unidades = (cantidad.unidades * porciones).toFixed(2);
            resultado += `<li>${ingrediente}: ${gramos} g (${unidades} huevo${unidades > 1 ? 's' : ''})</li>`;
        } else {
            resultado += `<li>${ingrediente}: ${(cantidad * porciones).toFixed(2)}</li>`;
        }
    }
    resultado += `</ul>`;
    document.getElementById('resultado').innerHTML = resultado;
}