DELIMITER 
CREATE TRIGGER after_insert_ristourne AFTER INSERT ON commande
FOR EACH ROW
BEGIN
DECLARE v_ca_client DECIMAL(5,2) ;
/* Récupération du montant total dépensé par le
client concerné par cette nouvelle commande */
SELECT SUM(total_cde) INTO v_ca_client
FROM commande
WHERE id_client = NEW.idClient ;
/* Si le montant total dépensé est supérieur ou égal à 100 €, on passe la ristourne à
"vrai" */
IF (v_ca_client >= 100) THEN UPDATE client
SET ristourne = TRUE
WHERE id_client = NEW.id_client ;
END IF ;
END //
DELIMITER ;