<?php
header('Content-Type: application/json');

// Vérifier si la variable POST 'data' est définie
if (isset($_POST['data'])) {
    // Récupérer les données envoyées dans la requête POST
    $data = $_POST['data'];

    // Traiter les données comme vous le souhaitez

    // Retourner une réponse JSON valide
    $response = array('message' => 'Traitement réussi');
    echo json_encode($response);
} else {
    // Retourner une réponse JSON avec une erreur si la variable POST 'data' n'est pas définie
    $response = array('error' => 'La variable POST "data" n\'est pas définie');
    echo json_encode($response);
}
?>
