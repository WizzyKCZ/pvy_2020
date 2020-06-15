/* Data ve formě polí JS objektů (JSON) */
let mesta = [
  {
    id: "citWhan",
    city: "Whangarei",
    peoples: 52600,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Whangarei_view_from_parahki.JPG",
    text:
      "Whangarei is a city in the Northland region of New Zealand's North Island. It's home to the Whangarei Falls, which tumble over cliff into a natural pool. Overlooking the city, volcanic Mount Parihaka features a war memorial and the remains of Maori villages. By the Hatea River, the Town Basin is a boat-dotted marina with restaurants, shops and galleries. Nearby, Claphams Clock Museum displays eclectic vintage clocks.",
  },
  {
    id: "citAuc",
    city: "Auckland",
    peoples: 1467800,
    sign:
      "https://www.newzealand.com/assets/Uploads/8b4e58884a/Viaduct-Harbour-Central-Auckland__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg",
    text:
      "Auckland, based around 2 large harbours, is a major city in the north of New Zealand’s North Island. In the centre, the iconic Sky Tower has views of Viaduct Harbour, which is full of superyachts and lined with bars and cafes. Auckland Domain, the city’s oldest park, is based around an extinct volcano and home to the formal Wintergardens. Near Downtown, Mission Bay Beach has a seaside promenade.",
  },
  {
    id: "citHam",
    city: "Hamilton",
    peoples: 169300,
    sign:
      "https://resources.stuff.co.nz/content/dam/images/1/p/5/g/6/s/image.related.StuffLandscapeSixteenByNine.710x400.1p504e.png/1527637232569.jpg",
    text:
      "Hamilton is a city in the Waikato region of New Zealand’s North Island. Hamilton Gardens, a sprawling public park, features elaborate themed gardens ranging from Italian Renaissance to Japanese and traditional Maori styles. The Waikato Museum displays Maori art and artefacts. Next door, ArtsPost gallery focuses on local art. In the busy city centre, Victoria Street is lined with restaurants, cafes and bars.",
  },
  {
    id: "citWhak",
    city: "Whakatane",
    peoples: 37100,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Whakatane_harbourside.jpg",
    text:
      "Whakatāne, also spelled Whakatane, is a town in the eastern Bay of Plenty region in the North Island of New Zealand, 90 kilometres east of Tauranga and 89 kilometres north-east of Rotorua, at the mouth of the Whakatane River.",
  },
  {
    id: "citGis",
    city: "Gisborne",
    peoples: 35500,
    sign:
      "https://www.newzealand.com/assets/Operator-Database/65b8015bdc/img-1536245588-6965-21543-p-2255AECC-9282-A8BC-898B23AE5D5B62C4-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNDcsNTUsODUsImpwZyIsNjUsMi41XQ.jpg",
    text:
      "Gisborne is a city on the east coast of New Zealand’s North Island. It’s known for wineries and surf beaches such as Makorori. The Tairawhiti Museum has exhibits on indigenous and colonial history, with Wyllie Cottage, an early European house, and Maori artefacts. Titirangi Reserve has lookouts and a monument to explorer James Cook. Nearby, Te Poho-o-Rawiri is a Maori meeting house with carvings of ancestral figures.",
  },
  {
    id: "citNap",
    city: "Napier",
    peoples: 65000,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Napier_and_bay.jpg/1200px-Napier_and_bay.jpg+",
    text:
      "Napier, a coastal city on New Zealand's North Island, is set amid the renowned wine-producing region of Hawke's Bay. Rebuilt after a 1931 earthquake, the city is known for art deco landmarks like the zigzag-patterned Daily Telegraph Building. Along the tree-lined waterfront promenade the Marine Parade, the Pania of the Reef statue depicting a Maori maiden, is a symbol of the city.",
  },
  {
    id: "citStr",
    city: "Stratford",
    peoples: 5740,
    sign:
      "https://resources.stuff.co.nz/content/dam/images/1/d/0/r/p/j/image.related.StuffLandscapeSixteenByNine.1240x700.1d0p4m.png/1469151064921.jpg",
    text:
      "Stratford is the only town in Stratford District, and the seat of the Taranaki Region, in New Zealand's North Island. It lies beneath the eastern slopes of Mount Taranaki/Egmont, approximately halfway between New Plymouth and Hāwera, near the geographic centre of the Taranaki Region.",
  },
  {
    id: "citPalNor",
    city: "Palmerston North",
    peoples: 88300,
    sign:
      "https://www.newzealand.com/assets/Tourism-NZ/Manawatu/b9ad661025/img-1536927421-6044-10373-p-1C5721E5-AD15-248B-5F782DBD37685E4B-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg",
    text:
      "Palmerston North is a city on New Zealand's North Island. In the centre, the New Zealand Rugby Museum displays sporting memorabilia, including vintage All Blacks uniforms. Next door is the Te Manawa art, science and history museum. Adjacent to the Manawatu River, Victoria Esplanade is a sprawling park with a duck pond and rose gardens. Just outside the city is Manawatu Gorge, with forested hills and native bushland.",
  },
  {
    id: "citWel",
    city: "Wellington",
    peoples: 215400,
    sign:
      "https://www.newzealand.com/assets/Tourism-NZ/Other/bcab3eae5b/img-1536990824-1205-12463-p-60497D66-E2E6-F9E9-DA66CAAE56CBF698-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsInBuZyIsNjUsMi41XQ.png",
    text:
      'Wellington, the capital of New Zealand, sits near the North Island’s southernmost point on the Cook Strait. A compact city, it encompasses a waterfront promenade, sandy beaches, a working harbour and colourful timber houses on surrounding hills. From Lambton Quay, the iconic red Wellington Cable Car heads to the Wellington Botanic Gardens. Strong winds through the Cook Strait give it the nickname "Windy Wellington."',
  },
  {
    id: "citRic",
    city: "Richmond",
    peoples: 92716,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Richmond_NZ_Main_Street_001.JPG",
    text:
      "Richmond is a town and the seat of the Tasman District Council. It lies 13 kilometres south of Nelson in the South Island of New Zealand, close to the southern extremity of Tasman Bay. The town was first settled in 1842 and was named in 1854 after the town of Richmond on Thames near London.",
  },
  {
    id: "citNel",
    city: "Nelson",
    peoples: 52900,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Nelson_New_Zealand.jpg",
    text:
      "Nelson is a city on the South Island of New Zealand, facing Tasman Bay. It's known for local arts and crafts stores, and art galleries. It's also a popular base for nearby caving sites, vineyards and Abel Tasman National Park. Established by English settlers in 1841, the city's history is showcased at Founders Heritage Park, a living museum with a vintage railway.",
  },
  {
    id: "citBle",
    city: "Blenheim",
    peoples: 26400,
    sign:
      "https://www.greatjourneysofnz.co.nz/assets/uploads/950x575-Blenheim.JPG",
    text:
      "Blenheim is a town on New Zealand’s South Island. It’s known as a gateway to the wineries of the Wairau Valley to the west. In town, the Marlborough Museum chronicles the development of winemaking, plus early Polynesian settlement of the region. The Omaka Aviation Heritage Centre houses filmmaker Peter Jackson’s collection of World War I aircraft, displayed in sets re-creating their flight history.",
  },
  {
    id: "citGre",
    city: "Greymouth",
    peoples: 8160,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/GreymouthPanorama2009.JPG/1200px-GreymouthPanorama2009.JPG",
    text:
      "Greymouth is a town on the west coast of New Zealand’s South Island. Its History House Museum has exhibits chronicling the town’s mining and jade-hunting past. To the south, Shantytown Heritage Park is a re-created gold rush town with a museum and steam train. North of Greymouth, the Point Elizabeth Walkway winds along coastal clifftops to the forests of Rapahoe Scenic Reserve, home to abundant birdlife.",
  },
  {
    id: "citChr",
    city: "Christchurch",
    peoples: 385500,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Christchurch_City.jpg/1200px-Christchurch_City.jpg",
    text:
      "Christchurch, known for its English heritage, is located on the east coast of New Zealand’s South Island. Flat-bottomed punts glide on the Avon River, which meanders through the city centre. On its banks are cycling paths, the green expanse of Hagley Park and Christchurch Botanic Gardens. In 2010 and 2011, earthquakes destroyed many of the historic centre's stone-built buildings.",
  },
  {
    id: "citDun",
    city: "Dunedin",
    peoples: 128800,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Dunedin_Collage.jpg",
    text:
      "Dunedin is a city in New Zealand, at the head of Otago Harbour on the South Island’s southeast coast. It's known for its Scottish and Maori heritage, Victorian and Edwardian architecture, and a large student population. Hiking and cycling trails crisscross the dramatic landscape of the adjoining Otago Peninsula, home to colonies of albatross, sea lions and rare yellow-eyed penguins.",
  },
  {
    id: "citInv",
    city: "Invercargill",
    peoples: 56200,
    sign:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Downtown_Invercargill%2C_Southland%2C_New_Zealand.jpg",
    text:
      "Invercargill is a city near the southern tip of New Zealand’s South Island. It’s a gateway to wilderness areas including Stewart Island, with its Rakiura Track. Queens Park features flower displays and sports facilities. In town, Bill Richardson Transport World features a vast collection of vintage automobiles. To the southeast, Waituna Lagoon is home to abundant birdlife and trout populations.",
  },
];

$(function () {
  $("#mapa-nz circle").hide();
  $("#mesta").on("change", function () {
    $("#mapa-nz circle").toggle(500);
  });

  let puvodni = "";

  $("#mapa-nz path").on("mouseover", function () {
    if ($("#kraje:checked").val()) {
      puvodni = $(this).css("fill");
      $(this).css("fill", "#00FF00");
      $(this).popover({
        trigger: "click",

        placement: "right",

        offset: "10%, -100",

        title: $(this).find("title").text(),
      });
    }
  });

  $("#mapa-nz path").on("mouseout", function () {
    $(this).css("fill", puvodni);
  });

  $("#mapa-nz circle").on("click", function () {
    let id = $(this).attr("id");
    $("#mapa-nz circle").css("fill", "black");
    $("#mapa-nz circle").css("fill", "#009900");
    $(this).css("fill", "#00FF00");

    let mesto = mesta.find((item) => {
      return item.id == id;
    });

    $("#info").fadeOut(1000, function () {
      $("#info").html(
        `<div class="col-12"><h2 class="bg-succes">${
          mesto.city
        } <small class="text-small">${new Intl.NumberFormat("cs-CS").format(
          mesto.peoples
        )} obv.</small></h2></div><div class="col-2 mb-2"><img src="${
          mesto.sign
        }" class="img-fluid"></div><div class="col-10">${mesto.text}</div>`
      );
    });
    $("#info").fadeIn(1000);
  });
});
