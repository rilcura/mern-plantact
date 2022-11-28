import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import '../index.css'
import TnCsModal from '../components/footer/TnCsModal';

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [municipality, setMunicipality] = useState([])
  const [barangay, setBarangay] = useState([])
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const municipalities = [
  //   { id: "1", name: "Angeles" },
  //   { id: "2", name: "Apalit" },
  //   { id: "3", name: "Arayat" },
  //   { id: "4", name: "Bacolor" },
  //   { id: "5", name: "Candaba" },
  //   { id: "6", name: "Floridablanca" },
  //   { id: "7", name: "Guagua" },
  //   { id: "8", name: "Lubao" },
  //   { id: "9", name: "Mabalacat" },
  //   { id: "10", name: "Macabebe" },
  //   { id: "11", name: "Magalang" },
  //   { id: "12", name: "Masantol" },
  //   { id: "13", name: "Mexico" },
  //   { id: "14", name: "Minalin" },
  //   { id: "15", name: "Porac" },
  //   { id: "16", name: "San Fernando" },
  //   { id: "17", name: "San Luis" },
  //   { id: "18", name: "San Simon" },
  //   { id: "19", name: "Santa Ana" },
  //   { id: "20", name: "Santa Rita" },
  //   { id: "21", name: "Santo Tomas" },
  //   { id: "22", name: "Sasmuan" },
  // ]

  // const barangays = [
  //   // Angeles
  //   { id: "1", municipalityId: "1", name: "Amsic" },
  //   { id: "2", municipalityId: "1", name: "Anunas" },
  //   { id: "3", municipalityId: "1", name: "Balibago" },
  //   { id: "4", municipalityId: "1", name: "Cpaaya" },
  //   { id: "5", municipalityId: "1", name: "Claro M. Recto" },
  //   { id: "6", municipalityId: "1", name: "Cuayan" },
  //   { id: "7", municipalityId: "1", name: "Cutcut" },
  //   { id: "8", municipalityId: "1", name: "Cutud" },
  //   { id: "9", municipalityId: "1", name: "Lourdes North West" },
  //   { id: "10", municipalityId: "1", name: "Lourdes Sur" },
  //   { id: "11", municipalityId: "1", name: "Lourdes Sur East" },
  //   { id: "12", municipalityId: "1", name: "Malabanias" },
  //   { id: "13", municipalityId: "1", name: "Margot" },
  //   { id: "14", municipalityId: "1", name: "Mining" },
  //   { id: "15", municipalityId: "1", name: "Ninoy Aquino (Marisol)" },
  //   { id: "16", municipalityId: "1", name: "Pampang" },
  //   { id: "17", municipalityId: "1", name: "Pandan" },
  //   { id: "18", municipalityId: "1", name: "Pulung Cacutud" },
  //   { id: "19", municipalityId: "1", name: "Pulung Maragul" },
  //   { id: "20", municipalityId: "1", name: "Pulungbulu" },
  //   { id: "21", municipalityId: "1", name: "Salapungan" },
  //   { id: "22", municipalityId: "1", name: "San Jose " },
  //   { id: "23", municipalityId: "1", name: "San Nicolas" },
  //   { id: "24", municipalityId: "1", name: "Santa Teresita" },
  //   { id: "25", municipalityId: "1", name: "Santa Trinidad" },
  //   { id: "26", municipalityId: "1", name: "Santo Cristo" },
  //   { id: "27", municipalityId: "1", name: "Santo Domingo" },
  //   { id: "28", municipalityId: "1", name: "Santo Rosario (Pob.)" },
  //   { id: "29", municipalityId: "1", name: "Sapalibutad" },
  //   { id: "30", municipalityId: "1", name: "Sapangbato" },
  //   { id: "31", municipalityId: "1", name: "Tabun" },
  //   { id: "32", municipalityId: "1", name: "Virgen Delos Remedios" },
  //   // Apalit
  //   { id: "33", municipalityId: "2", name: "Balucuc" },
  //   { id: "34", municipalityId: "2", name: "Calantipe" },
  //   { id: "35", municipalityId: "2", name: "Cansinala" },
  //   { id: "36", municipalityId: "2", name: "Capalangan" },
  //   { id: "37", municipalityId: "2", name: "Colgante" },
  //   { id: "38", municipalityId: "2", name: "Paligui" },
  //   { id: "39", municipalityId: "2", name: "Sampaloc" },
  //   { id: "40", municipalityId: "2", name: "San Juan (Pob.)" },
  //   { id: "41", municipalityId: "2", name: "San Vicente" },
  //   { id: "42", municipalityId: "2", name: "Sucad" },
  //   { id: "43", municipalityId: "2", name: "Sulipan" },
  //   { id: "44", municipalityId: "2", name: "Tabuyuc (Santo Rosario)" },
  //   // Arayat
  //   { id: "45", municipalityId: "3", name: "Arenas" },
  //   { id: "46", municipalityId: "3", name: "Baliti" },
  //   { id: "47", municipalityId: "3", name: "Batasan" },
  //   { id: "48", municipalityId: "3", name: "Buensuceso" },
  //   { id: "49", municipalityId: "3", name: "Candating" },
  //   { id: "50", municipalityId: "3", name: "Cupang" },
  //   { id: "51", municipalityId: "3", name: "Gatiawin" },
  //   { id: "52", municipalityId: "3", name: "Guemasan" },
  //   { id: "53", municipalityId: "3", name: "Kaledian" },
  //   { id: "54", municipalityId: "3", name: "La Paz" },
  //   { id: "55", municipalityId: "3", name: "Lacmit" },
  //   { id: "56", municipalityId: "3", name: "Lacquios" },
  //   { id: "57", municipalityId: "3", name: "Mangga-Cacutud" },
  //   { id: "58", municipalityId: "3", name: "Mapalad" },
  //   { id: "59", municipalityId: "3", name: "Matamo" },
  //   { id: "60", municipalityId: "3", name: "Panlinlang" },
  //   { id: "61", municipalityId: "3", name: "Paralaya" },
  //   { id: "62", municipalityId: "3", name: "Plazang Luma" },
  //   { id: "63", municipalityId: "3", name: "Poblacion" },
  //   { id: "64", municipalityId: "3", name: "San Agustin Norte" },
  //   { id: "65", municipalityId: "3", name: "San Agustin Sur" },
  //   { id: "66", municipalityId: "3", name: "San Antonio" },
  //   { id: "67", municipalityId: "3", name: "San Jose Mesulo" },
  //   { id: "68", municipalityId: "3", name: "San Juan Bano" },
  //   { id: "69", municipalityId: "3", name: "San Mateo" },
  //   { id: "70", municipalityId: "3", name: "San Nicolas" },
  //   { id: "71", municipalityId: "3", name: "San Roque Bitas" },
  //   { id: "72", municipalityId: "3", name: "Santo Nino Tabuan" },
  //   { id: "73", municipalityId: "3", name: "Suclayin" },
  //   { id: "74", municipalityId: "3", name: "Telepayong" },
  //   // Bacalor
  //   { id: "75", municipalityId: "4", name: "Balas" },
  //   { id: "76", municipalityId: "4", name: "Cabalantian" },
  //   { id: "77", municipalityId: "4", name: "Cabambangan" },
  //   { id: "78", municipalityId: "4", name: "Cabetican" },
  //   { id: "79", municipalityId: "4", name: "Calibutbut" },
  //   { id: "80", municipalityId: "4", name: "Concepcion" },
  //   { id: "81", municipalityId: "4", name: "Dolores" },
  //   { id: "82", municipalityId: "4", name: "Duat" },
  //   { id: "83", municipalityId: "4", name: "Macabacle" },
  //   { id: "84", municipalityId: "4", name: "Magliman" },
  //   { id: "85", municipalityId: "4", name: "Maliwalu" },
  //   { id: "86", municipalityId: "4", name: "Mesalipit" },
  //   { id: "87", municipalityId: "4", name: "Parulog" },
  //   { id: "88", municipalityId: "4", name: "Potrero" },
  //   { id: "89", municipalityId: "4", name: "San Antonio" },
  //   { id: "90", municipalityId: "4", name: "San Isidro" },
  //   { id: "91", municipalityId: "4", name: "San Vicente" },
  //   { id: "92", municipalityId: "4", name: "Santa Barbara" },
  //   { id: "93", municipalityId: "4", name: "Santa Ines" },
  //   { id: "94", municipalityId: "4", name: "Talba" },
  //   { id: "95", municipalityId: "4", name: "Tinajero" },
  //   // Candaba
  //   { id: "96", municipalityId: "5", name: "Bahay Pare" },
  //   { id: "97", municipalityId: "5", name: "Bambang" },
  //   { id: "98", municipalityId: "5", name: "Barangca" },
  //   { id: "99", municipalityId: "5", name: "Barit" },
  //   { id: "100", municipalityId: "5", name: "Buas" },
  //   { id: "101", municipalityId: "5", name: "Cuayang Bugtong" },
  //   { id: "102", municipalityId: "5", name: "Dalayap" },
  //   { id: "103", municipalityId: "5", name: "Dulong Ilog" },
  //   { id: "104", municipalityId: "5", name: "Gulap" },
  //   { id: "105", municipalityId: "5", name: "Lanang" },
  //   { id: "106", municipalityId: "5", name: "Lourdes" },
  //   { id: "107", municipalityId: "5", name: "Magumbali" },
  //   { id: "108", municipalityId: "5", name: "Mandasig" },
  //   { id: "109", municipalityId: "5", name: "Mandili" },
  //   { id: "110", municipalityId: "5", name: "Mangga" },
  //   { id: "111", municipalityId: "5", name: "Mapaniqui" },
  //   { id: "112", municipalityId: "5", name: "Paligui" },
  //   { id: "113", municipalityId: "5", name: "Pangclara" },
  //   { id: "114", municipalityId: "5", name: "Pansinao" },
  //   { id: "115", municipalityId: "5", name: "Paralaya" },
  //   { id: "116", municipalityId: "5", name: "Pasig" },
  //   { id: "117", municipalityId: "5", name: "Pescadores" },
  //   { id: "118", municipalityId: "5", name: "Pulong Gubat" },
  //   { id: "119", municipalityId: "5", name: "Pulong Palazan" },
  //   { id: "120", municipalityId: "5", name: "Salapungan" },
  //   { id: "121", municipalityId: "5", name: "San Agustin" },
  //   { id: "122", municipalityId: "5", name: "Santo Rosario" },
  //   { id: "123", municipalityId: "5", name: "Tagulod" },
  //   { id: "124", municipalityId: "5", name: "Talang" },
  //   { id: "125", municipalityId: "5", name: "Tenejero" },
  //   { id: "126", municipalityId: "5", name: "Vizal San Pablo" },
  //   { id: "127", municipalityId: "5", name: "Vizal Santo Cristo" },
  //   { id: "128", municipalityId: "5", name: "Vizal Santo Nino" },
  //   // Floridablanca
  //   { id: "129", municipalityId: "6", name: "Anon" },
  //   { id: "130", municipalityId: "6", name: "Apalit" },
  //   { id: "131", municipalityId: "6", name: "Basa Air Base" },
  //   { id: "132", municipalityId: "6", name: "Benedicto" },
  //   { id: "133", municipalityId: "6", name: "Bodega" },
  //   { id: "134", municipalityId: "6", name: "Cabangcalan" },
  //   { id: "135", municipalityId: "6", name: "Calantas" },
  //   { id: "136", municipalityId: "6", name: "Carmencity" },
  //   { id: "137", municipalityId: "6", name: "Consuelo" },
  //   { id: "138", municipalityId: "6", name: "Dampe" },
  //   { id: "139", municipalityId: "6", name: "Del Carmen" },
  //   { id: "140", municipalityId: "6", name: "Fortuna" },
  //   { id: "141", municipalityId: "6", name: "Gutad" },
  //   { id: "142", municipalityId: "6", name: "Mabical" },
  //   { id: "143", municipalityId: "6", name: "Maligaya" },
  //   { id: "144", municipalityId: "6", name: "Mawacat" },
  //   { id: "145", municipalityId: "6", name: "Nabuclod" },
  //   { id: "146", municipalityId: "6", name: "Pabanlag" },
  //   { id: "147", municipalityId: "6", name: "Paguiruan" },
  //   { id: "148", municipalityId: "6", name: "Palmayo" },
  //   { id: "149", municipalityId: "6", name: "Pandaguirig" },
  //   { id: "150", municipalityId: "6", name: "Poblacion" },
  //   { id: "151", municipalityId: "6", name: "San Antonio" },
  //   { id: "152", municipalityId: "6", name: "San Isidro" },
  //   { id: "153", municipalityId: "6", name: "San Jose" },
  //   { id: "154", municipalityId: "6", name: "San Nicolas" },
  //   { id: "155", municipalityId: "6", name: "San Pedro" },
  //   { id: "156", municipalityId: "6", name: "San Ramon" },
  //   { id: "157", municipalityId: "6", name: "San Roque" },
  //   { id: "158", municipalityId: "6", name: "Santa Monica" },
  //   { id: "159", municipalityId: "6", name: "Santo Rosario" },
  //   { id: "160", municipalityId: "6", name: "Solib" },
  //   { id: "161", municipalityId: "6", name: "Valdez" },
  //   // Guagua
  //   { id: "162", municipalityId: "7", name: "Ascomo" },
  //   { id: "163", municipalityId: "7", name: "Bancal" },
  //   { id: "164", municipalityId: "7", name: "Jose Abad Santos" },
  //   { id: "165", municipalityId: "7", name: "Lambac" },
  //   { id: "166", municipalityId: "7", name: "Magsaysay" },
  //   { id: "167", municipalityId: "7", name: "Maquiapo" },
  //   { id: "168", municipalityId: "7", name: "Natividad" },
  //   { id: "169", municipalityId: "7", name: "Plaza Burgos" },
  //   { id: "170", municipalityId: "7", name: "Pulungmasle" },
  //   { id: "171", municipalityId: "7", name: "Rizal" },
  //   { id: "172", municipalityId: "7", name: "San Agustin" },
  //   { id: "173", municipalityId: "7", name: "San Antonio" },
  //   { id: "174", municipalityId: "7", name: "San Isidro" },
  //   { id: "175", municipalityId: "7", name: "San Jose" },
  //   { id: "176", municipalityId: "7", name: "San Juan" },
  //   { id: "177", municipalityId: "7", name: "San Juan Bautista" },
  //   { id: "178", municipalityId: "7", name: "San Juan Nepomuceno" },
  //   { id: "179", municipalityId: "7", name: "San Matias" },
  //   { id: "180", municipalityId: "7", name: "San Miguel" },
  //   { id: "181", municipalityId: "7", name: "San Nicolas 1St" },
  //   { id: "182", municipalityId: "7", name: "San Nicolas 2Nd" },
  //   { id: "183", municipalityId: "7", name: "San Pablo" },
  //   { id: "184", municipalityId: "7", name: "San Pedro" },
  //   { id: "185", municipalityId: "7", name: "San Rafael" },
  //   { id: "186", municipalityId: "7", name: "San Roque" },
  //   { id: "187", municipalityId: "7", name: "San Vicente" },
  //   { id: "188", municipalityId: "7", name: "Santa Filomena" },
  //   { id: "189", municipalityId: "7", name: "Santa Ines" },
  //   { id: "190", municipalityId: "7", name: "Santa Ursula" },
  //   { id: "191", municipalityId: "7", name: "Santo Cristo" },
  //   { id: "192", municipalityId: "7", name: "Santo Nino" },
  //   // Lubao
  //   { id: "193", municipalityId: "8", name: "Balantacan" },
  //   { id: "194", municipalityId: "8", name: "Bancal Pugad" },
  //   { id: "195", municipalityId: "8", name: "Bancal Sinubli" },
  //   { id: "196", municipalityId: "8", name: "Baruya" },
  //   { id: "197", municipalityId: "8", name: "Calangain" },
  //   { id: "198", municipalityId: "8", name: "Concepcion" },
  //   { id: "199", municipalityId: "8", name: "De La Paz" },
  //   { id: "200", municipalityId: "8", name: "Del Carmen" },
  //   { id: "201", municipalityId: "8", name: "Don Ignacio Dimson" },
  //   { id: "202", municipalityId: "8", name: "Lourdes" },
  //   { id: "203", municipalityId: "8", name: "Prado Siongco" },
  //   { id: "204", municipalityId: "8", name: "Remedios" },
  //   { id: "205", municipalityId: "8", name: "San Agustin" },
  //   { id: "206", municipalityId: "8", name: "San Antonio" },
  //   { id: "207", municipalityId: "8", name: "San Francisco" },
  //   { id: "208", municipalityId: "8", name: "San Isidro" },
  //   { id: "209", municipalityId: "8", name: "San Jose Apunan" },
  //   { id: "210", municipalityId: "8", name: "San Jose Gumi" },
  //   { id: "211", municipalityId: "8", name: "San Juan" },
  //   { id: "212", municipalityId: "8", name: "San Matias" },
  //   { id: "213", municipalityId: "8", name: "San Miguel" },
  //   { id: "214", municipalityId: "8", name: "San Nicolas 1St" },
  //   { id: "215", municipalityId: "8", name: "San Nicolas 2Nd" },
  //   { id: "216", municipalityId: "8", name: "San Pablo 1St" },
  //   { id: "217", municipalityId: "8", name: "San Pablo 2Nd" },
  //   { id: "218", municipalityId: "8", name: "San Pedro Palcarangan" },
  //   { id: "219", municipalityId: "8", name: "San Pedro Saug" },
  //   { id: "220", municipalityId: "8", name: "San Roque Arbol" },
  //   { id: "221", municipalityId: "8", name: "San Roque Dau" },
  //   { id: "222", municipalityId: "8", name: "San Vicente" },
  //   { id: "223", municipalityId: "8", name: "Santa Barbara" },
  //   { id: "224", municipalityId: "8", name: "Santa Catalina" },
  //   { id: "225", municipalityId: "8", name: "Santa Cruz" },
  //   { id: "226", municipalityId: "8", name: "Santa Lucia" },
  //   { id: "227", municipalityId: "8", name: "Santa Maria" },
  //   { id: "228", municipalityId: "8", name: "Santa Monica" },
  //   { id: "229", municipalityId: "8", name: "Santa Rita" },
  //   { id: "230", municipalityId: "8", name: "Santa Teresa 1St" },
  //   { id: "231", municipalityId: "8", name: "Santa Teresa 2Nd" },
  //   { id: "232", municipalityId: "8", name: "Santiago" },
  //   { id: "233", municipalityId: "8", name: "Santo Cristo" },
  //   { id: "234", municipalityId: "8", name: "Santo Domingo" },
  //   { id: "235", municipalityId: "8", name: "Santo Nino" },
  //   { id: "236", municipalityId: "8", name: "Santo Tomas" },
  //   // Mabalacat
  //   { id: "237", municipalityId: "9", name: "Atlu-Bola" },
  //   { id: "238", municipalityId: "9", name: "Bical" },
  //   { id: "239", municipalityId: "9", name: "Bundagul" },
  //   { id: "240", municipalityId: "9", name: "Cacutud" },
  //   { id: "241", municipalityId: "9", name: "Calumpang" },
  //   { id: "242", municipalityId: "9", name: "Camachiles" },
  //   { id: "243", municipalityId: "9", name: "Dau" },
  //   { id: "244", municipalityId: "9", name: "Dolores" },
  //   { id: "245", municipalityId: "9", name: "Duquit" },
  //   { id: "246", municipalityId: "9", name: "Lacandula" },
  //   { id: "247", municipalityId: "9", name: "Mabiga" },
  //   { id: "248", municipalityId: "9", name: "Macapagal Village" },
  //   { id: "249", municipalityId: "9", name: "Mamatitang" },
  //   { id: "250", municipalityId: "9", name: "Mangalit" },
  //   { id: "251", municipalityId: "9", name: "Marcos Village" },
  //   { id: "252", municipalityId: "9", name: "Mawaque" },
  //   { id: "253", municipalityId: "9", name: "Paralyunan" },
  //   { id: "254", municipalityId: "9", name: "Poblacion" },
  //   { id: "255", municipalityId: "9", name: "San Francisco" },
  //   { id: "256", municipalityId: "9", name: "San Joaquin" },
  //   { id: "257", municipalityId: "9", name: "Santa Ines" },
  //   { id: "258", municipalityId: "9", name: "Santa Maria" },
  //   { id: "259", municipalityId: "9", name: "Santo Rosario" },
  //   { id: "260", municipalityId: "9", name: "Sapang Balen" },
  //   { id: "261", municipalityId: "9", name: "Sapang Biabas" },
  //   { id: "262", municipalityId: "9", name: "Tabun" },
  //   // Macabebe
  //   { id: "263", municipalityId: "10", name: "Batasan" },
  //   { id: "264", municipalityId: "10", name: "Caduang Tete" },
  //   { id: "265", municipalityId: "10", name: "Candelaria" },
  //   { id: "266", municipalityId: "10", name: "Castuli" },
  //   { id: "267", municipalityId: "10", name: "Consuelo" },
  //   { id: "268", municipalityId: "10", name: "Dalayap" },
  //   { id: "269", municipalityId: "10", name: "Mataguiti" },
  //   { id: "270", municipalityId: "10", name: "San Esteben" },
  //   { id: "271", municipalityId: "10", name: "San Francisco" },
  //   { id: "272", municipalityId: "10", name: "San Gabriel" },
  //   { id: "273", municipalityId: "10", name: "San Isidro" },
  //   { id: "274", municipalityId: "10", name: "San Jose" },
  //   { id: "275", municipalityId: "10", name: "San Juan" },
  //   { id: "276", municipalityId: "10", name: "San Rafael" },
  //   { id: "277", municipalityId: "10", name: "San Roque" },
  //   { id: "278", municipalityId: "10", name: "San Vicente" },
  //   { id: "279", municipalityId: "10", name: "Santa Cruz" },
  //   { id: "280", municipalityId: "10", name: "Santa Lutgarda" },
  //   { id: "281", municipalityId: "10", name: "Santa Maria" },
  //   { id: "282", municipalityId: "10", name: "Santa Rita" },
  //   { id: "283", municipalityId: "10", name: "Santo Nino" },
  //   { id: "284", municipalityId: "10", name: "Santo Rosario" },
  //   { id: "285", municipalityId: "10", name: "Saplad David" },
  //   { id: "286", municipalityId: "10", name: "Tacasan" },
  //   { id: "287", municipalityId: "10", name: "Telacsan" },
  //   // Magalang
  //   { id: "288", municipalityId: "11", name: "Ayala" },
  //   { id: "289", municipalityId: "11", name: "Bucanan" },
  //   { id: "290", municipalityId: "11", name: "Camias" },
  //   { id: "291", municipalityId: "11", name: "Dolores" },
  //   { id: "292", municipalityId: "11", name: "Escaler" },
  //   { id: "293", municipalityId: "11", name: "La Paz" },
  //   { id: "294", municipalityId: "11", name: "Navaling" },
  //   { id: "295", municipalityId: "11", name: "San Agustin" },
  //   { id: "296", municipalityId: "11", name: "San Antonio" },
  //   { id: "297", municipalityId: "11", name: "San Franciso" },
  //   { id: "298", municipalityId: "11", name: "San Ildefonso" },
  //   { id: "299", municipalityId: "11", name: "San Isidro" },
  //   { id: "300", municipalityId: "11", name: "San Jose" },
  //   { id: "301", municipalityId: "11", name: "San Miguel" },
  //   { id: "302", municipalityId: "11", name: "San Nicolas 1St " },
  //   { id: "303", municipalityId: "11", name: "San Nicolas 2Nd" },
  //   { id: "304", municipalityId: "11", name: "San Pablo" },
  //   { id: "305", municipalityId: "11", name: "San Pedro I" },
  //   { id: "306", municipalityId: "11", name: "San Pedro Ii" },
  //   { id: "307", municipalityId: "11", name: "San Roque" },
  //   { id: "308", municipalityId: "11", name: "San Vicente" },
  //   { id: "309", municipalityId: "11", name: "Santa Cruz" },
  //   { id: "310", municipalityId: "11", name: "Santa Lucia" },
  //   { id: "311", municipalityId: "11", name: "Santa Maria" },
  //   { id: "312", municipalityId: "11", name: "Santa Nino" },
  //   { id: "313", municipalityId: "11", name: "Santa Rosario" },
  //   { id: "314", municipalityId: "11", name: "Turu" },
  //   // Masantol
  //   { id: "315", municipalityId: "12", name: "Alauli" },
  //   { id: "316", municipalityId: "12", name: "Bagang" },
  //   { id: "317", municipalityId: "12", name: "Balibago" },
  //   { id: "318", municipalityId: "12", name: "Bebe Anac" },
  //   { id: "319", municipalityId: "12", name: "Bebe Matua" },
  //   { id: "320", municipalityId: "12", name: "Balacus" },
  //   { id: "321", municipalityId: "12", name: "Cambasi" },
  //   { id: "322", municipalityId: "12", name: "Malauli" },
  //   { id: "323", municipalityId: "12", name: "Nigui" },
  //   { id: "324", municipalityId: "12", name: "Palimpe" },
  //   { id: "325", municipalityId: "12", name: "Segrada" },
  //   { id: "326", municipalityId: "12", name: "San Agustin" },
  //   { id: "327", municipalityId: "12", name: "San Isidro Anac" },
  //   { id: "328", municipalityId: "12", name: "San Isidro Matua" },
  //   { id: "329", municipalityId: "12", name: "San Nicolas" },
  //   { id: "330", municipalityId: "12", name: "San Pedro" },
  //   { id: "331", municipalityId: "12", name: "Santa Cruz" },
  //   { id: "332", municipalityId: "12", name: "Santa Lucia Anac" },
  //   { id: "333", municipalityId: "12", name: "Santa Lucia Matua" },
  //   { id: "334", municipalityId: "12", name: "Santa Lucia Paguiba" },
  //   { id: "335", municipalityId: "12", name: "Santa Lucia Wakas" },
  //   { id: "336", municipalityId: "12", name: "Santa Monica" },
  //   { id: "337", municipalityId: "12", name: "Santa Nino" },
  //   { id: "338", municipalityId: "12", name: "Supang Kawayan" },
  //   { id: "339", municipalityId: "12", name: "Sua" },
  //   // Mexico
  //   { id: "340", municipalityId: "13", name: "Acli" },
  //   { id: "341", municipalityId: "13", name: "Anao" },
  //   { id: "342", municipalityId: "13", name: "Balas" },
  //   { id: "343", municipalityId: "13", name: "Buenavista" },
  //   { id: "344", municipalityId: "13", name: "Camuning" },
  //   { id: "345", municipalityId: "13", name: "Cawayan" },
  //   { id: "346", municipalityId: "13", name: "Concepcion" },
  //   { id: "347", municipalityId: "13", name: "Culubasa" },
  //   { id: "348", municipalityId: "13", name: "Divisoria" },
  //   { id: "349", municipalityId: "13", name: "Dolores" },
  //   { id: "350", municipalityId: "13", name: "Eden" },
  //   { id: "351", municipalityId: "13", name: "Gandus" },
  //   { id: "352", municipalityId: "13", name: "Lagundi" },
  //   { id: "353", municipalityId: "13", name: "Laput" },
  //   { id: "354", municipalityId: "13", name: "Laug" },
  //   { id: "355", municipalityId: "13", name: "Masamat" },
  //   { id: "356", municipalityId: "13", name: "Masangsang" },
  //   { id: "357", municipalityId: "13", name: "Nueva Victoria" },
  //   { id: "358", municipalityId: "13", name: "Pandacaqui" },
  //   { id: "359", municipalityId: "13", name: "Pangatlan" },
  //   { id: "360", municipalityId: "13", name: "Panipuan" },
  //   { id: "361", municipalityId: "13", name: "Parian" },
  //   { id: "362", municipalityId: "13", name: "Sabanilla" },
  //   { id: "363", municipalityId: "13", name: "San Antonio" },
  //   { id: "364", municipalityId: "13", name: "San Carlos" },
  //   { id: "365", municipalityId: "13", name: "San Jose Malino" },
  //   { id: "366", municipalityId: "13", name: "San Jose Matulid" },
  //   { id: "367", municipalityId: "13", name: "San Juan" },
  //   { id: "368", municipalityId: "13", name: "San Lorenzo" },
  //   { id: "369", municipalityId: "13", name: "San Miguel" },
  //   { id: "370", municipalityId: "13", name: "San Nicolas" },
  //   { id: "371", municipalityId: "13", name: "San Pablo" },
  //   { id: "372", municipalityId: "13", name: "San Patricio" },
  //   { id: "373", municipalityId: "13", name: "San Rafael" },
  //   { id: "374", municipalityId: "13", name: "San Roque" },
  //   { id: "375", municipalityId: "13", name: "San Vicente" },
  //   { id: "376", municipalityId: "13", name: "Santa Cruz" },
  //   { id: "377", municipalityId: "13", name: "Santa Maria" },
  //   { id: "378", municipalityId: "13", name: "Santo Domingo" },
  //   { id: "379", municipalityId: "13", name: "Santo Rosario" },
  //   { id: "380", municipalityId: "13", name: "Sapang Maisac" },
  //   { id: "381", municipalityId: "13", name: "Suclaban" },
  //   { id: "382", municipalityId: "13", name: "Tangle" },
  //   // Minalin
  //   { id: "383", municipalityId: "14", name: "Bulac" },
  //   { id: "384", municipalityId: "14", name: "Dawe" },
  //   { id: "385", municipalityId: "14", name: "Lourdes" },
  //   { id: "386", municipalityId: "14", name: "Maniango" },
  //   { id: "387", municipalityId: "14", name: "San Francisco 1St" },
  //   { id: "388", municipalityId: "14", name: "San Francisco 2Nd" },
  //   { id: "389", municipalityId: "14", name: "San Isidro" },
  //   // Porac
  //   { id: "390", municipalityId: "15", name: "Balubad" },
  //   { id: "391", municipalityId: "15", name: "Calzadang Bayu" },
  //   { id: "392", municipalityId: "15", name: "Camias" },
  //   { id: "393", municipalityId: "15", name: "Cangatba" },
  //   { id: "394", municipalityId: "15", name: "Diaz" },
  //   { id: "395", municipalityId: "15", name: "Dolores" },
  //   { id: "396", municipalityId: "15", name: "Inararo" },
  //   { id: "397", municipalityId: "15", name: "Jalung" },
  //   { id: "398", municipalityId: "15", name: "Mancatian" },
  //   { id: "399", municipalityId: "15", name: "Manibaug Libutad" },
  //   { id: "400", municipalityId: "15", name: "Manibaug Paralaya" },
  //   { id: "401", municipalityId: "15", name: "Manibaug Pasig" },
  //   { id: "402", municipalityId: "15", name: "Manuali" },
  //   { id: "403", municipalityId: "15", name: "Mitla Proper" },
  //   { id: "404", municipalityId: "15", name: "Palat" },
  //   { id: "405", municipalityId: "15", name: "Pias" },
  //   { id: "406", municipalityId: "15", name: "Pio" },
  //   { id: "407", municipalityId: "15", name: "Planas" },
  //   { id: "408", municipalityId: "15", name: "Poblacion" },
  //   { id: "409", municipalityId: "15", name: "Pulong Santol" },
  //   { id: "410", municipalityId: "15", name: "Salu" },
  //   { id: "411", municipalityId: "15", name: "San Jose Mitla" },
  //   { id: "412", municipalityId: "15", name: "Santa Cruz" },
  //   { id: "413", municipalityId: "15", name: "Sapang Uwak" },
  //   { id: "414", municipalityId: "15", name: "Sepung Bulaun" },
  //   { id: "415", municipalityId: "15", name: "Sinura" },
  //   { id: "416", municipalityId: "15", name: "Villa Maria" },
  //   // San Fernando City
  //   { id: "417", municipalityId: "16", name: "Alasas" },
  //   { id: "418", municipalityId: "16", name: "Baliti" },
  //   { id: "419", municipalityId: "16", name: "Bulaon" },
  //   { id: "420", municipalityId: "16", name: "Calulut" },
  //   { id: "421", municipalityId: "16", name: "Del Carmen" },
  //   { id: "422", municipalityId: "16", name: "Del Pilar" },
  //   { id: "423", municipalityId: "16", name: "Del Rosario" },
  //   { id: "424", municipalityId: "16", name: "Dela Paz Norte" },
  //   { id: "425", municipalityId: "16", name: "Dela Paz Sur" },
  //   { id: "426", municipalityId: "16", name: "Dolores" },
  //   { id: "427", municipalityId: "16", name: "Juliana" },
  //   { id: "428", municipalityId: "16", name: "Lara" },
  //   { id: "429", municipalityId: "16", name: "Lourdes" },
  //   { id: "430", municipalityId: "16", name: "Magliman" },
  //   { id: "431", municipalityId: "16", name: "Maimpis" },
  //   { id: "432", municipalityId: "16", name: "Malino" },
  //   { id: "433", municipalityId: "16", name: "Malpitic" },
  //   { id: "434", municipalityId: "16", name: "Pandaras" },
  //   { id: "435", municipalityId: "16", name: "Panipuan" },
  //   { id: "436", municipalityId: "16", name: "Pulung Balu" },
  //   { id: "437", municipalityId: "16", name: "Quebiauan" },
  //   { id: "438", municipalityId: "16", name: "Saguin" },
  //   { id: "439", municipalityId: "16", name: "San Agustin" },
  //   { id: "440", municipalityId: "16", name: "San Felipe" },
  //   { id: "441", municipalityId: "16", name: "San Isidro" },
  //   { id: "442", municipalityId: "16", name: "San Jose" },
  //   { id: "443", municipalityId: "16", name: "San Juan" },
  //   { id: "444", municipalityId: "16", name: "San Nicolas" },
  //   { id: "445", municipalityId: "16", name: "San Pedro" },
  //   { id: "446", municipalityId: "16", name: "Santa Lucia" },
  //   { id: "447", municipalityId: "16", name: "Santa Teresita" },
  //   { id: "448", municipalityId: "16", name: "Santo Nino" },
  //   { id: "449", municipalityId: "16", name: "Santo Rosario" },
  //   { id: "450", municipalityId: "16", name: "Sindalan" },
  //   { id: "451", municipalityId: "16", name: "Telabastagan" },
  //   // San Luis
  //   { id: "452", municipalityId: "17", name: "San Agustin" },
  //   { id: "453", municipalityId: "17", name: "San Carlos" },
  //   { id: "454", municipalityId: "17", name: "San Isidro" },
  //   { id: "455", municipalityId: "17", name: "San Juan" },
  //   { id: "456", municipalityId: "17", name: "San Nicolas" },
  //   { id: "457", municipalityId: "17", name: "San Roque" },
  //   { id: "458", municipalityId: "17", name: "San Sebastian" },
  //   { id: "459", municipalityId: "17", name: "Santa Catalina" },
  //   { id: "460", municipalityId: "17", name: "Santa Cruz Pambilog" },
  //   { id: "461", municipalityId: "17", name: "Santa Cruz Poblacion" },
  //   { id: "462", municipalityId: "17", name: "Santa Lucia" },
  //   { id: "463", municipalityId: "17", name: "Santa Monica" },
  //   { id: "464", municipalityId: "17", name: "Santa Rita" },
  //   { id: "465", municipalityId: "17", name: "Santo Nino" },
  //   { id: "466", municipalityId: "17", name: "Santo Rosario" },
  //   { id: "467", municipalityId: "17", name: "Santo Tomas" },
  //   // San Simon
  //   { id: "468", municipalityId: "18", name: "Concepcion" },
  //   { id: "469", municipalityId: "18", name: "De La Paz" },
  //   { id: "470", municipalityId: "18", name: "San Agustin" },
  //   { id: "471", municipalityId: "18", name: "San Isidro" },
  //   { id: "472", municipalityId: "18", name: "San Jose" },
  //   { id: "473", municipalityId: "18", name: "San Juan" },
  //   { id: "474", municipalityId: "18", name: "San Miguel" },
  //   { id: "475", municipalityId: "18", name: "San Nicolas" },
  //   { id: "476", municipalityId: "18", name: "San Pablo Libutad" },
  //   { id: "477", municipalityId: "18", name: "San Pablo Proper" },
  //   { id: "478", municipalityId: "18", name: "San Pedro" },
  //   { id: "479", municipalityId: "18", name: "Santa Cruz" },
  //   { id: "480", municipalityId: "18", name: "Santa Monica" },
  //   { id: "481", municipalityId: "18", name: "Santo Nino" },
  //   // Santa Ana
  //   { id: "482", municipalityId: "19", name: "San Agustin" },
  //   { id: "483", municipalityId: "19", name: "San Bartolome" },
  //   { id: "484", municipalityId: "19", name: "San Isidro" },
  //   { id: "485", municipalityId: "19", name: "San Joaquin" },
  //   { id: "486", municipalityId: "19", name: "San Jose" },
  //   { id: "487", municipalityId: "19", name: "San Juan" },
  //   { id: "488", municipalityId: "19", name: "San Nicolas" },
  //   { id: "489", municipalityId: "19", name: "San Pablo" },
  //   { id: "490", municipalityId: "19", name: "San Pedro" },
  //   { id: "491", municipalityId: "19", name: "San Roque" },
  //   { id: "492", municipalityId: "19", name: "Santa Lucia" },
  //   { id: "493", municipalityId: "19", name: "Santa Maria" },
  //   { id: "494", municipalityId: "19", name: "Santiago" },
  //   { id: "495", municipalityId: "19", name: "Santo Rosario" },
  //   // Santa Rita
  //   { id: "496", municipalityId: "20", name: "Becuran" },
  //   { id: "497", municipalityId: "20", name: "Dila-Dila" },
  //   { id: "498", municipalityId: "20", name: "San Agustin" },
  //   { id: "499", municipalityId: "20", name: "San Basilio " },
  //   { id: "500", municipalityId: "20", name: "San Isidro" },
  //   { id: "501", municipalityId: "20", name: "San Jose" },
  //   { id: "502", municipalityId: "20", name: "San Juan" },
  //   { id: "503", municipalityId: "20", name: "San Matias" },
  //   { id: "504", municipalityId: "20", name: "San Vicente" },
  //   { id: "505", municipalityId: "20", name: "Santa Monica" },
  //   // Santo Tomas
  //   { id: "506", municipalityId: "21", name: "Moras De La Paz" },
  //   { id: "507", municipalityId: "21", name: "Poblacion" },
  //   { id: "508", municipalityId: "21", name: "San Bartolome" },
  //   { id: "509", municipalityId: "21", name: "San Matias" },
  //   { id: "510", municipalityId: "21", name: "San Vicente" },
  //   { id: "511", municipalityId: "21", name: "Santo Rosario" },
  //   { id: "512", municipalityId: "21", name: "Sapa" },
  //   // Sasmuan
  //   { id: "513", municipalityId: "22", name: "Batang 1St" },
  //   { id: "514", municipalityId: "22", name: "Batang 2Nd" },
  //   { id: "515", municipalityId: "22", name: "Mabuanbuan" },
  //   { id: "516", municipalityId: "22", name: "Malusac" },
  //   { id: "517", municipalityId: "22", name: "Sabitanan" },
  //   { id: "518", municipalityId: "22", name: "San Antonio" },
  //   { id: "519", municipalityId: "22", name: "San Nicolas 1St" },
  //   { id: "520", municipalityId: "22", name: "San Nicolas 2Nd" },
  //   { id: "521", municipalityId: "22", name: "San Pedro" },
  //   { id: "522", municipalityId: "22", name: "Santa Lucia" },
  //   { id: "523", municipalityId: "22", name: "Santa Monica" },
  //   { id: "524", municipalityId: "22", name: "Santo Tomas" },
  //   // Edit Fixed
  //   // Minalin
  //   { id: "525", municipalityId: "14", name: "San Nicolas" },
  //   { id: "526", municipalityId: "14", name: "San Pedro" },
  //   { id: "527", municipalityId: "14", name: "Santa Catalina" },
  //   { id: "528", municipalityId: "14", name: "Santa Maria" },
  //   { id: "529", municipalityId: "14", name: "Santa Rita" },
  //   { id: "530", municipalityId: "14", name: "Santo Domingo" },
  //   { id: "531", municipalityId: "14", name: "Santo Rosario" },
  //   { id: "532", municipalityId: "14", name: "Saplad" },
  //   // Porac
  //   { id: "534", municipalityId: "15", name: "Babo Pangulo" },
  //   { id: "535", municipalityId: "15", name: "Babo Sacan" },
  // ]

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        municipality,
        barangay,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // useEffect(() => {
  //   setMunicipality(municipalities)
  // }, [])

  // const handleMunicipality = (id) => {
  //   const dt = barangays.filter(x => x.municipalityId === id)
  //   setBarangay(dt);
  // }

  // console.log(municipalities)

  return (

    <Container fluid className="login-image text-white vh-100 d-flex align-items-center justify-content-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Container className='small-container text-white p-4 rounded my-3'>
        <h1 className="my-3">Create an account</h1>
        <Form onSubmit={submitHandler}>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="municipality">
              <Form.Label>Municipality</Form.Label>
              <Form.Select
                type="municipality"
                required
                onChange={(e) => setMunicipality(e.target.value)}>
                <option >Select Municipality</option>
                <option >Angeles</option>
                <option >Apalit</option>
                <option >Arayat</option>
                <option >Bacolor</option>
                <option >Candaba</option>
                <option >Floridablanca</option>
                <option >Guagua</option>
                <option >Lubao</option>
                <option >Mabalacat</option>
                <option >Macabebe</option>
                <option >Magalang</option>
                <option >Masantol</option>
                <option >Mexico</option>
                <option >Minalin</option>
                <option >Porac</option>
                <option>San Fernando</option>
                <option >San Luis</option>
                <option >San Simon</option>
                <option >Santa Ana</option>
                <option >Santa Rita</option>
                <option >Santo Tomas</option>
                <option >Sasmuan</option>
              </Form.Select >
            </Form.Group >

            <Form.Group as={Col} className="mb-3" controlId="barangay">
              <Form.Label>Barangay</Form.Label>
              <Form.Control
                type="barangay"
                required
                onChange={(e) => setBarangay(e.target.value)}
              />

            </Form.Group>

            <div className="my-2 d-grid">
              <Button type="submit" variant="success" size="" className='light-green'>Create account</Button>
            </div>

            <div className='d-flex justify-content-between'>
              <Form.Group className="my-2 d-flex align-items-center">
                <Form.Check
                  required
                  // label='Agree to terms and conditions'
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  className='me-1'
                />
                Agree  to<TnCsModal />

              </Form.Group>

              <div className="mt-3">
                Already have an account?{' '}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </div>
            </div>
          </Row>
        </Form >

      </Container >
    </Container >
  );
}
