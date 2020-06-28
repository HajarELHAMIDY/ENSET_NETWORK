package org.sid.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

public class Utl implements Serializable{
	

	private Long idUt;
	private String nom;
	private String prenom;
	private String photo;
	public Utl(Long idUt, String nom, String prenom, String photo) {
		super();
		this.idUt = idUt;
		this.nom = nom;
		this.prenom = prenom;
		this.photo = photo;
	}
	public Long getIdUt() {
		return idUt;
	}
	public void setIdUt(Long idUt) {
		this.idUt = idUt;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	

}
