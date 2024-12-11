abstract class HashGenerator {
  abstract generate(s: String): number;
}

class HashGeneratorFake implements HashGenerator {
  // Par contre, ici, le typage des paramètres est obligatoires
  generate(s: String) {
    return s.length;
  }
}

new HashGeneratorFake().generate("123");
